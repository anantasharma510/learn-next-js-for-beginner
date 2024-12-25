'use client';
import Link from 'next/link'; // Next.js Link component for navigation
import Image from 'next/image';
import Profiel from '../../public/vercel.svg'; // Profile picture image
import {Inter } from 'next/font/google'
// Main Home Component
export default function Home() {
  return (
    <div>
      {/* Navigation to the Product List */}
      {/* <Link 
        href="/productlist" 
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        Go to Product List
      </Link> */}
      
      {/* <Link 
        href="/productlist" 
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        Go to Product List
      </Link> */}
<h1> hello</h1>
      <Image 
        src={Profiel} 
        width={500}
        height={500}
        alt="Profile Picture" 
      />
      <img src={Profiler.src}></img>
      <Image 
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        width={500}
        height={500}
        alt="Profile Picture" 
      />
  
    </div>
  );
}
