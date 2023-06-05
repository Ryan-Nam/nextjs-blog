'use client';

import { Post } from '@/service/posts';
import { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
    posts : Post[];
    categories : string[];
};

const ALL_POSTS = 'All Posts'

export default function FilterablePosts({posts, categories}: Props) {
    const [seleted, setSelected] = useState(ALL_POSTS);
    const filtered = 
        seleted === ALL_POSTS 
            ? posts 
            : posts.filter((post) => post.category === seleted);

    return (
        <section className='m-4'>
            <PostsGrid posts={filtered}/>
            <Categories 
                categories={[ALL_POSTS, ...categories]} 
                selected={seleted} 
                onClick={(seleted) => setSelected(seleted)}
                // onClick = {selected} shorted
            />
        </section>
    );
}

