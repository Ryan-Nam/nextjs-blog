import Image from 'next/image';
import React from 'react';
import profileImage from '../../public/images/profile_ryan.png';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='text-center'>
            <Image 
                className='rounded-full mx-auto'
                src={profileImage} 
                alt='Picture of the author' 
                width={250} 
                height={250} 
                priority
            />
            <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Ryan"}</h2>
            <h3 className='text-xl font-semibold'>Frontend Developer</h3>
            <p>1 year experience, ICT Background, RYAN!</p>
            <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
                <Link href={'/contact'}>Contact Me</Link>
            </button>
        </section>
    );
}

