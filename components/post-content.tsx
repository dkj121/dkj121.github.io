import { type ReactNode } from "react";

interface PostContentProps {
	title: string;
	date: string | Date;
	topic: string;
	children: ReactNode;
}

export function PostContent({
	title,
	date,
	topic,
	children,
}: PostContentProps) {
	return (
		<article className="post-article">
			{/* Category label */}
			<p className="mb-2 text-xs font-[var(--font-mono)] tracking-[0.2em] text-[var(--color-accent-dim)] uppercase">
				{topic}
			</p>

			{/* Title */}
			<h1 className="mb-4 text-4xl leading-tight font-[var(--font-heading)] font-bold text-[var(--color-text)]">
				{title}
			</h1>

			{/* Metadata */}
			<p className="mb-8 text-sm text-[var(--color-text-muted)]">
				{new Date(date).toLocaleDateString("zh-CN", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</p>

			{/* Divider */}
			<div className="mb-8 border-t border-[var(--color-divider)]" />

			{/* Article body — marginalia floats right inline */}
			<div className="prose-invert prose max-w-none leading-relaxed font-[var(--font-body)] text-[var(--color-text)] [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-[var(--font-heading)] [&_h2]:text-[var(--color-text)] [&_h3]:font-[var(--font-heading)] [&_h3]:text-[var(--color-text)] [&_p]:text-[var(--color-text)]">
				{children}
			</div>
		</article>
	);
}
