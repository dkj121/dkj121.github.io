export type Command =
	| { type: "help" }
	| { type: "where"; field: string; value: string }
	| { type: "filter"; field: string; value: string }
	| { type: "orderby"; field: string; asc: boolean }
	| { type: "clear" }
	| { type: "unknown"; raw: string };

export function parseCommand(input: string): Command {
	const trimmed = input.trim();

	if (!trimmed || trimmed === "--list") return { type: "clear" };

	if (trimmed === "--help") return { type: "help" };
	if (trimmed === "--clear" || trimmed === "--reset") return { type: "clear" };

	// --where topic=ai
	const whereMatch = trimmed.match(/^--where\s+(\w+)=(.+)$/i);
	if (whereMatch) {
		return {
			type: "where",
			field: whereMatch[1].toLowerCase(),
			value: whereMatch[2],
		};
	}

	// --filter title:keyword
	const filterMatch = trimmed.match(/^--filter\s+(\w+):(.+)$/i);
	if (filterMatch) {
		return {
			type: "filter",
			field: filterMatch[1].toLowerCase(),
			value: filterMatch[2],
		};
	}

	// --orderby date|title [desc]
	const orderMatch = trimmed.match(/^--orderby\s+(\w+)(\s+desc)?$/i);
	if (orderMatch) {
		return {
			type: "orderby",
			field: orderMatch[1].toLowerCase(),
			asc: !orderMatch[2],
		};
	}

	return { type: "unknown", raw: trimmed };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function applyCommand(items: any[], cmd: Command): any[] {
	switch (cmd.type) {
		case "clear":
			return items;
		case "where":
		case "filter":
			return items.filter((item) =>
				String(item[cmd.field] ?? "")
					.toLowerCase()
					.includes(cmd.value.toLowerCase()),
			);
		case "orderby":
			return [...items].sort((a, b) => {
				const av = String(a[cmd.field] ?? "");
				const bv = String(b[cmd.field] ?? "");
				return cmd.asc ? av.localeCompare(bv) : bv.localeCompare(av);
			});
		default:
			return items;
	}
}

export const HELP_TEXT = `
dkj121@blog CLI v1.0
─────────────────────────────────────
  --list               show all posts
  --help               show this help
  --where <k>=<v>      filter posts where field k equals value v
                       e.g. --where k=v
  --filter <k>:<v>     filter posts where field k contains value v
                       e.g. --filter k:v
  --orderby <f>        sort by field f (optionally: date title topic)
                       e.g. --orderby f
  --clear | --reset    reset all filters
`.trim();
