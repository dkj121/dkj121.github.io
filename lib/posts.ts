import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const postsDir = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	topic: string;
}

export interface PostWithContent extends PostMeta {
	marginalia: { id: string; content: string }[];
	contentHtml: string;
}

function extractMarginalia(rawMd: string): {
	content: string;
	marginalia: { id: string; content: string }[];
} {
	const notes: { id: string; content: string }[] = [];
	let cleaned = rawMd;

	// Match > [!note] content blocks
	const noteRegex = /> \[!note\]\s*(.+?)(?:\n(?:> .*)*)?/gm;
	let match;
	let count = 0;

	while ((match = noteRegex.exec(rawMd)) !== null) {
		const id = `marg-${count}`;
		// Extract note content (everything after [!note] marker)
		let noteContent = match[0]
			.replace(/> \[!note\]\s*/, '')
			.replace(/^> ?/gm, '')
			.trim();
		notes.push({ id, content: noteContent });
		// Replace the note block with a reference marker in the body
		cleaned = cleaned.replace(
			match[0],
			`<sup class="marginalia-ref">[${String.fromCodePoint(0x2460 + count)}]</sup>`,
		);
		count++;
	}

	return { content: cleaned, marginalia: notes };
}

export function getAllPosts(): PostMeta[] {
	if (!fs.existsSync(postsDir)) return [];

	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

	const posts = files.map((file) => {
		const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
		const { data } = matter(raw);
		const parsedDate = data.date ? new Date(data.date) : null;
		return {
			slug: file.replace(/\.(mdx|md)$/, ''),
			title: data.title ?? file,
			date: parsedDate && !isNaN(parsedDate.getTime())
				? parsedDate.toISOString().slice(0, 10)
				: '----',
			topic: data.topic ?? '',
			_sortDate: parsedDate && !isNaN(parsedDate.getTime())
				? parsedDate.getTime()
				: 0,
		};
	});

	return posts
		.sort((a, b) => b._sortDate - a._sortDate)
		.map(({ slug, title, date, topic }) => ({ slug, title, date, topic }));
}

export async function getPostBySlug(slug: string): Promise<PostWithContent | null> {
	const candidates = ['.mdx', '.md'];
	let raw: string | null = null;

	for (const ext of candidates) {
		const filePath = path.join(postsDir, `${slug}${ext}`);
		if (fs.existsSync(filePath)) {
			raw = fs.readFileSync(filePath, 'utf-8');
			break;
		}
	}

	if (!raw) return null;

	const { data, content: mdBody } = matter(raw);
	const { content: cleanedMd, marginalia } = extractMarginalia(mdBody);

	const result = await remark().use(remarkGfm).use(remarkHtml).process(cleanedMd);

	return {
		slug,
		title: data.title ?? slug,
		date: data.date
			? new Date(data.date).toISOString().slice(0, 10)
			: '----',
		topic: data.topic ?? '',
		marginalia,
		contentHtml: result.toString(),
	};
}
