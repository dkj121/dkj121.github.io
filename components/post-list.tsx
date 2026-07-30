import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

export function PostList({ posts }: { posts: PostMeta[] }) {
	return (
		<main className="terminal-menu">
			{/* CLI prompt */}
			<p className="prompt">
				dkj121@blog:~/posts$ ls -la --sort=date
			</p>

			{/* Column headers */}
			<div className="mt-4 grid grid-cols-3 gap-4">
				<span className="col-header">DATE</span>
				<span className="col-header">TITLE</span>
				<span className="col-header">TOPIC</span>
			</div>

			{/* Divider */}
			<div className="my-1 border-t border-[var(--color-divider)]" />

			{/* Post rows */}
			{posts.map((post) => (
				<Link
					key={post.slug}
					href={`/posts/${post.slug}`}
					className="grid grid-cols-3 gap-4 py-0.5 transition-colors hover:bg-[var(--color-card)]"
				>
					<span className="row-date">{post.date}</span>
					<span className="row-title truncate">{post.title}</span>
					<span className="row-topic">{post.topic}</span>
				</Link>
			))}

			{/* Exit line */}
			<p className="mt-8 text-[var(--color-text-muted)]">~ $ exit</p>
		</main>
	);
}
