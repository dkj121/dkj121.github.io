import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { PostContent } from "@/components/post-content";

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) notFound();

	return (
		<PostContent title={post.title} date={post.date} topic={post.topic}>
			<div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
		</PostContent>
	);
}

export function generateStaticParams() {
	return getAllPosts().map((post) => ({
		slug: encodeURIComponent(post.slug),
	}));
}
