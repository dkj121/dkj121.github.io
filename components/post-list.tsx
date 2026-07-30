"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import {
	parseCommand,
	applyCommand,
	HELP_TEXT,
	type Command,
} from "@/lib/utils";

export function PostList({ posts }: { posts: PostMeta[] }) {
	const [command, setCommand] = useState("");
	const [history, setHistory] = useState<string[]>([]);
	const [filtered, setFiltered] = useState<PostMeta[]>(posts);
	const [showHelp, setShowHelp] = useState(false);
	const [error, setError] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const terminalRef = useRef<HTMLDivElement>(null);

	// Focus input on click anywhere in terminal
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	function execute(cmd: Command) {
		setError("");
		setShowHelp(false);

		switch (cmd.type) {
			case "help":
				setShowHelp(true);
				break;
			case "clear":
				setFiltered(posts);
				break;
			case "where":
			case "filter":
			case "orderby":
			case "select":
				setFiltered(
					applyCommand(
						filtered.length < posts.length ? filtered : posts,
						cmd,
					) as PostMeta[],
				);
				break;
			case "unknown":
				setError(`unknown command: ${cmd.raw}. try --help`);
				break;
		}
	}

	function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			const input = command.trim();
			setHistory((prev) => [...prev, input]);
			execute(parseCommand(input));
			setCommand("");
		}
	}

	function handleTerminalClick() {
		inputRef.current?.focus();
	}

	return (
		<main
			ref={terminalRef}
			className="terminal-menu"
			onClick={handleTerminalClick}
			onKeyDown={() => {}}
		>
			{/* CLI prompt with interactive input */}
			<div className="mb-2 flex items-center gap-2">
				<span className="prompt whitespace-nowrap">dkj121@blog:~/posts$</span>
				<input
					ref={inputRef}
					type="text"
					value={command}
					onChange={(e) => setCommand(e.target.value)}
					onKeyDown={handleKeyDown}
					className="flex-1 border-none bg-transparent text-sm font-[var(--font-mono)] text-[var(--color-text)] outline-none"
					placeholder="ls --sort=date"
					spellCheck={false}
					autoComplete="off"
				/>
			</div>

			{/* Help output */}
			{showHelp && (
				<pre className="mb-4 text-xs leading-relaxed font-[var(--font-mono)] whitespace-pre text-[var(--color-text-muted)]">
					{HELP_TEXT}
				</pre>
			)}

			{/* Error */}
			{error && (
				<p className="mb-2 text-xs font-[var(--font-mono)] text-red-400">
					{error}
				</p>
			)}

			{/* Column headers */}
			<div className="mt-4 grid grid-cols-3 gap-4">
				<span className="col-header">DATE</span>
				<span className="col-header">TITLE</span>
				<span className="col-header">TOPIC</span>
			</div>

			{/* Divider */}
			<div className="my-1 border-t border-[var(--color-divider)]" />

			{/* Post rows */}
			{filtered.length === 0 ? (
				<p className="py-4 text-sm font-[var(--font-mono)] text-[var(--color-text-muted)]">
					no posts matched.
				</p>
			) : (
				filtered.map((post) => (
					<Link
						key={post.slug}
						href={`/posts/${post.slug}`}
						className="grid grid-cols-3 gap-4 py-0.5 transition-colors hover:bg-[var(--color-card)]"
					>
						<span className="row-date">{post.date}</span>
						<span className="row-title truncate">{post.title}</span>
						<span className="row-topic">{post.topic}</span>
					</Link>
				))
			)}

			{/* Command history */}
			{history.length > 0 && (
				<div className="mt-6 border-t border-[var(--color-divider)] pt-2">
					{history.slice(-3).map((cmd, i) => (
						<p
							key={i}
							className="text-xs font-[var(--font-mono)] text-[var(--color-text-muted)]"
						>
							<span className="prompt">$ </span>
							{cmd}
						</p>
					))}
				</div>
			)}
		</main>
	);
}
