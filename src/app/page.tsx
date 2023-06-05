// import Image from 'next/image'

import Link from 'next/link';

export default function Home() {
  return (
    <section className="">
      <img src="" alt="" />
      <h1>{"Hi, I'm Ryan"}</h1>
      <p>Frontend Developer</p>
      <p>1 year experience, ICT Background, RYAN!</p>
      <button className='bg-yellow-400 font-bold rounded-full'>
        <Link href={'/contact'}>Contact Me</Link></button>
    </section>
  )
}
