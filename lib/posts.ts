import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const postsDir = path.join(process.cwd(), "content/posts");

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	topic: string;
}

export interface PostWithContent extends PostMeta {
	contentHtml: string;
}

function parseTopic(topic: unknown): string {
	if (Array.isArray(topic)) {
		return topic.map((t) => String(t).trim().toLowerCase()).join(" ");
	} else if (typeof topic === "string") {
		return topic.trim().toLowerCase();
	} else {
		return "";
	}
}

export function getAllPosts(): PostMeta[] {
	if (!fs.existsSync(postsDir)) return [];

	const files = fs
		.readdirSync(postsDir)
		.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

	const posts = files.map((file) => {
		const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
		const { data } = matter(raw);
		const parsedDate = data.date ? new Date(data.date) : null;
		const parsedTopic = parseTopic(data.topic);
		return {
			slug: file.replace(/\.(mdx|md)$/, ""),
			title: data.title ?? file,
			date:
				parsedDate && !isNaN(parsedDate.getTime())
					? parsedDate.toISOString().slice(0, 10)
					: "----",
			topic: parsedTopic,
			_sortDate:
				parsedDate && !isNaN(parsedDate.getTime()) ? parsedDate.getTime() : 0,
		};
	});

	return posts
		.sort((a, b) => b._sortDate - a._sortDate)
		.map(({ slug, title, date, topic }) => ({ slug, title, date, topic }));
}

export async function getPostBySlug(
	slug: string,
): Promise<PostWithContent | null> {
	const decoded = decodeURIComponent(slug);
	const candidates = [".mdx", ".md"];
	let raw: string | null = null;

	for (const ext of candidates) {
		const filePath = path.join(postsDir, `${decoded}${ext}`);
		if (fs.existsSync(filePath)) {
			raw = fs.readFileSync(filePath, "utf-8");
			break;
		}
	}

	if (!raw) {
		console.error(
			`[getPostBySlug] FAIL — slug="${slug}", decoded="${decoded}"`,
		);
		return null;
	}

	const { data, content: mdBody } = matter(raw);
	const result = await remark()
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeHighlight)
		.use(rehypeStringify)
		.process(mdBody);

	return {
		slug: decoded,
		title: data.title ?? decoded,
		date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "----",
		topic: parseTopic(data.topic),
		contentHtml: result.toString(),
	};
}
