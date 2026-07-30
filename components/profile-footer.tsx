export function ProfileFooter() {
	return (
		<footer className="profile-card mx-auto mt-16 max-w-[900px] px-6 py-8">
			<div className="flex items-center gap-4">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-bg)] text-lg font-bold text-[var(--color-accent)]">
					DK
				</div>
				<div>
					<p className="text-lg font-semibold text-[var(--color-text)]">
						dkj121
					</p>
					<p className="text-sm text-[var(--color-text-muted)]">
						Writing about code, literature, and the spaces between.
					</p>
				</div>
			</div>
			<div className="mt-4 flex gap-6 text-sm text-[var(--color-text-muted)]">
				<a
					href="https://github.com/dkj121"
					target="_blank"
					rel="noopener noreferrer"
					className="transition-colors hover:text-[var(--color-accent)]"
				>
					github
				</a>
				<span className="text-[var(--color-divider)]">|</span>
				<a
					href="/rss.xml"
					className="transition-colors hover:text-[var(--color-accent)]"
				>
					rss
				</a>
			</div>
		</footer>
	);
}
