import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
const Winner_show = () => {
  return (
    <>
    <div className='flex items-center justify-center text-5xl text-pink-600 dark:text-white font-bold mb-10 mt-10'>Winner Showcase</div>
        <Card className="max-w-md mx-auto bg-white rounded-l overflow-hidden md:max-w-2xl border-zinc-300 border-spacing-2 shadow-pink-xl">
        <CardHeader className="flex justify-between items-center p-6">
            <CardTitle className="text-xl font-semibold text-zinc-700">Winner team name</CardTitle>
            <div className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            </div>
        </CardHeader>
        <CardContent>
            <img src="/images/logo-1.png" alt="Card Image" className="w-15 h-15" height={100} width={100}/>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-6">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/images/avatar-1.png" alt=""/>
                </div>
            <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
            </div>
        </CardFooter>
        </Card>
        </>
 )
  
}

export default Winner_show