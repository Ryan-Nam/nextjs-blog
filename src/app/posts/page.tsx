import FilterablePosts from '@/components/FilterablePosts';
import PostsGrid from '@/components/PostsGrid';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
    const posts = await getAllPosts();
    //filter category
    const categories = [...new Set(posts.map(post=>post.category))]
    
    return (
        <>
        <FilterablePosts posts={posts} categories={categories}/>
        
        </>
    );
}

