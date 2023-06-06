import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';

type Props = {
    params: {
        slug: string;
    }
}

export default async function PastPage({params: {slug}}: Props) {
    // 1. read post data which is passed
    // 2. display the data md

    const post = await getPostData(slug);
    return (
        <>
            <h1>{post.title}</h1>
            {/* <pre>{post.content}</pre> */}
            <MarkdownViewer content={post.content}/>
        </>
    );
}

