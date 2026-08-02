import Image from "next/image";
import Link from "next/link";

export function ProfileFooter() {
	return (
		<footer className="profile-card mx-auto mt-16 max-w-[900px] px-6 py-8">
			<div className="flex items-center gap-4">
				<Image src="/dkj121.png" alt="Profile Image" width={56} height={64} />
				<div>
					<p className="text-lg font-semibold text-[var(--color-text)]">
						dkj121
					</p>
					<p className="text-sm text-[var(--color-text-muted)]">
						这里是
						dkj121，图片里的是家里养过的最后一只家猫（后因偷吃小兔而被流放），目前在
						<Link
							href="https://www.njupt.edu.cn"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--color-accent)] hover:underline"
						>
							南京邮电大学
						</Link>
						就读，就任
						<Link
							href="https://sast.fun/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--color-accent)] hover:underline"
						>
							SAST 软研部 C# Group
						</Link>
						组第35届组长
					</p>
					<p className="text-sm text-[var(--color-text-muted)]">
						有关这篇 blog 的更多内容，请参考
						<Link
							href="https://github.com/dkj121/dkj121.github.io"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--color-accent)] hover:underline"
						>
							这个仓库
						</Link>
					</p>
					<p className="text-sm text-[var(--color-text-muted)]">
						Here is dkj121, the last cat raised at home (later exiled for
						stealing and eating a rabbit). Currently studying at
						<Link
							href="https://www.njupt.edu.cn"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--color-accent)] hover:underline"
						>
							Nanjing University of Posts and Telecommunications
						</Link>
						, serving as the 35th leader of the C# Group in the
						<Link
							href="https://sast.fun/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--color-accent)] hover:underline"
						>
							SAST Software Research Department
						</Link>
						.
					</p>
					<p className="text-sm text-[var(--color-text-muted)]">
						For more information about this blog, please refer to
						<Link
							href="https://github.com/dkj121/dkj121.github.io"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--color-accent)] hover:underline"
						>
							the repository
						</Link>
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
					href="mailto:2726073422@qq.com"
					target="_blank"
					rel="noopener noreferrer"
					className="transition-colors hover:text-[var(--color-accent)]"
				>
					email
				</a>
			</div>
		</footer>
	);
}
