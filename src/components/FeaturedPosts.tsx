import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
    // 1. Read all the post data 
    const posts = await getFeaturedPosts();
    
    // 2. Show all the post data
    // => prop

    return (
        <section>
            <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
            {/* grid - resuable */}
            <PostsGrid posts={posts}/>
        </section>
    );
}

