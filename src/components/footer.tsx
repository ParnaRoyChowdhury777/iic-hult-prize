import React from 'react'

const footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-black mt-6 ">
    <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="w-full max-w-screen-xl mx-auto  md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.iictmsl.com/" className="flex items-center mb-0 ml-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <picture>
                <source srcSet="/images/IIC_WHITE.png" media="(prefers-color-scheme: dark)" />
                <img src="/images/IIC.png" className="h-8" alt="IIC Logo" />
            </picture>
            <span className="self-center text-4xl font-bold whitespace-nowrap navy dark:text-white">TMSL</span>
            </a>
            <ul className="flex flex-wrap items-center mb-0 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gray" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook mr-4 hover:scale-125 dark:fill-gray-400 dark:stroke-slate-300 dark:stroke-width-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gray" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter mr-4 hover:scale-125 dark:fill-gray-400 dark:stroke-slate-100 dark:stroke-width-2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gray" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin mr-4 hover:scale-125 dark:fill-gray-400 dark:stroke-slate-100 dark:stroke-width-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gray" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram mr-4 hover:scale-125 dark:fill-gray-400 dark:stroke-gray-800 dark:stroke-width-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                </li>
                </ul>
        </div>
        <div className="ml-4 dark:text-white text-gray-500 mt-2">A Govt. of India - MoE Initiative</div>
        <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-2">© 2024 <a href="https://www.iictmsl.com/" className="hover:underline">IIC TMSL™</a>. All Rights Reserved.</span>
    </div>
    </footer>


  )
}

export default footer