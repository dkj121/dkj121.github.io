import { type ReactNode } from "react";

interface PostContentProps {
	title: string;
	date: string | Date;
	topic: string;
	marginalia: { id: string; content: string }[];
	children: ReactNode;
}

export function PostContent({
	title,
	date,
	topic,
	marginalia,
	children,
}: PostContentProps) {
	return (
		<>
			<article className="post-layout">
				{/* Main content column */}
				<div className="content">
					{/* Category label */}
					<p className="mb-2 text-xs font-[var(--font-mono)] tracking-[0.2em] text-[var(--color-accent-dim)] uppercase">
						{topic}
					</p>

					{/* Title */}
					<h1 className="mb-4 text-4xl leading-tight font-[var(--font-heading)] font-bold text-[var(--color-text)]">
						{title}
					</h1>

					{/* Metadata and topic */}
					<p className="mb-8 text-sm font-[var(--font-body)] text-[var(--color-text-muted)]">
						{new Date(date).toLocaleDateString("zh-CN", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
						{` • ${topic}`}
					</p>

					{/* Divider */}
					<div className="mb-8 border-t border-[var(--color-divider)]" />

					{/* Article body */}
					<div className="prose-invert prose leading-relaxed font-[var(--font-body)] text-[var(--color-text)] [&_h2]:font-[var(--font-heading)] [&_h2]:text-[var(--color-text)] [&_h3]:font-[var(--font-heading)] [&_p]:text-[var(--color-text)]">
						{children}
					</div>
				</div>

				{/* Marginalia sidebar */}
				{marginalia.length > 0 && (
					<aside className="sidebar">
						<p className="mb-4 text-sm font-[var(--font-heading)] text-[var(--color-accent-dim)]">
							旁注
						</p>
						{marginalia.map((note, i) => (
							<div
								key={note.id}
								className="mb-4 border-b border-[var(--color-divider)] pb-4 last:border-0"
							>
								<span className="mb-1 block text-xs text-[var(--color-accent)]">
									{String.fromCodePoint(0x2460 + i)}
								</span>
								<p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
									{note.content}
								</p>
							</div>
						))}
					</aside>
				)}
			</article>
		</>
	);
}
