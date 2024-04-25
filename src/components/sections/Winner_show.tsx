"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Header from '../header';
import Footer from '../footer';
import Confetti from "react-confetti";
const Winner_show = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const scrollToSection = () => {
        
        const section = document.getElementById('imageSection');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header />
            <div className='flex items-center justify-center text-5xl text-pink-600 font-bold mb-10 mt-20'>Winner Showcase</div>
            <Card className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl border-zinc-300 border-spacing-2" style={{ boxShadow: "0 12px 16px 0 rgba(252, 0, 125, 0.4)" }}>
                <CardHeader className="flex justify-between items-center p-6">
                    <CardTitle className="text-3xl font-semibold text-zinc-900">Winner team name</CardTitle>
                    <div className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center">
                        <img src="/images/logo-1.png" alt="Card Image" className="w-20 h-25" height={150} width={150} />
                        <div className="ml-4">
                            <h2 className="text-xl text-zinc-700 font-bold ml-5">Name of project</h2>
                            <p className="mt-2 text-zinc-500 ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id illum repudiandae nesciunt? Libero minima neque vel eaque numquam laborum, sit deleniti expedita? Accusantium vitae incidunt optio laudantium amet.</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6">
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt="" />
                        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt="" />
                        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt="" />
                        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt="" />
                    </div>
                    <div className="flex items-center">
                        <button className="bg-pink-600 hover:bg-pink-200 hover:text-pink-500 text-white font-bold py-2 px-4 rounded-xl" onClick={scrollToSection}>Explore</button>
                    </div>
                </CardFooter>
            </Card>
            <section id="imageSection" className="flex items-center justify-center mt-8 px-24 ">
            <div className="flex items-center justify-center mt-8 px-24 ">
                    
                        <p className='text-semibold text-center '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe exercitationem, quam quod asperiores praesentium rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum ratione porro sint magnam nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore velit, laborum, nihil ipsa ipsam deleniti officiis eveniet laboriosam dicta exercitationem magni officia sed veniam libero suscipit at voluptatum aspernatur.
                        </p>
                    
            </div>
            <div className='flex p-8 mx-auto'>
            <div className="grid grid-cols-2 gap-4">
                

                <img src="/images/winner-1.JPG" alt="Image 1" className="col-span-2 h-100 w-100 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe exercitationem, quam quod asperiores praesentium rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum ratione porro sint magnam nam!</p>
                <img src="/images/winner-2.JPG" alt="Image 2" className="col-span-1" />
                <img src="/images/winner-3.JPG" alt="Image 3" className="col-span-1" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe exercitationem, quam quod asperiores praesentium rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum ratione porro sint magnam nam!</p>
                <img src="/images/winner-4.JPG" alt="Image 4" className="col-span-2" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe exercitationem, quam quod asperiores praesentium rerum molestiae, voluptatum nam hic voluptatibus. Omnis quo at laborum ratione porro sint magnam nam!Lorem
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sunt rerum facere, nihil vel necessitatibus? Debitis repellendus veritatis consequatur a! Voluptatibus minima explicabo necessitatibus, ad obcaecati molestiae dolore esse beatae.
                </p>
            </div>
</div>

            
            <div className="fixed left-4 bottom-4 z-10 mx-auto flex w-auto items-center justify-center rounded border border-zinc-700 bg-black py-1 px-2 text-xs text-white dark:border-zinc-200 dark:bg-white dark:text-zinc-700 sm:left-8 sm:bottom-10">Made with<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="heart mx-1 inline-block h-5 w-5 text-rose-600"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path></svg>by<a href="https://www.linkedin.com/in/iictmsl/" className="ml-1 font-semibold text-white dark:text-zinc-700" target="_blank" rel="noopener noreferrer">IIC TMSL</a></div>
            <Confetti width={1920} height={650} />
            </section>
             <Footer />
            
        </>
    );
}

export default Winner_show;
