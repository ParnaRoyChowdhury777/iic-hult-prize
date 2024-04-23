"use client";

import React, {useState} from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Header from '../header';
/*import Popup from '../popup';*/
const Winner_show = () => {
    /*const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);*/
 
  return (
    <>
    <Header/>
    <div className='flex items-center justify-center text-5xl text-pink-600 font-bold mb-10 mt-20'>Winner Showcase</div>
        <Card className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl border-zinc-300 border-spacing-2" style={{boxShadow: "0 12px 16px 0 rgba(252, 0, 125, 0.4)"}} dark:box-shadow>
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
                <img src="/images/logo-1.png" alt="Card Image" className="w-20 h-25" height={150} width={150}/>
                <div className="ml-4">
                    <h2 className="text-xl text-zinc-700 font-bold ml-5">Name of project</h2>
                    <p className="mt-2 text-zinc-500 ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id illum repudiandae nesciunt? Libero minima neque vel eaque numquam laborum, sit deleniti expedita? Accusantium vitae incidunt optio laudantium amet.</p>
                </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-6">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                </div>
            <div className="flex items-center">
         <button className="bg-pink-600 hover:bg-pink-200 hover:text-pink-500 text-white font-bold py-2 px-4 rounded-xl">Explore</button>
            </div>
        </CardFooter>
        </Card>
        </>
 )
  
}

export default Winner_show