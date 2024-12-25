'use client';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from "react";

// Main Home Component
export default function Home() {
  // const router = useRouter(); // Initialize Next.js router for navigation
  
  // Custom navigate function for dynamic navigation
  // const navigate = (path) => {
  //   router.push(path); // Navigate to the specified path
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* <main className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full"> */}
        {/* Page Title */}
        {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">Main Page</h1> */}

        {/* Links using Next.js Link component */}
        {/* <nav className="mb-4">
          <Link href="/login" className="text-blue-500 hover:underline">
            Go to Login Page
          </Link>
          <br />
          <Link href="/about" className="text-blue-500 hover:underline">
            Go to About Page
          </Link>
        </nav> */}

        {/* Buttons for navigation using router.push */}
        {/* <div className="space-y-2">
          <button
            onClick={() => router.push("/login")}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Go to Login
          </button>
          <button
            onClick={() => router.push("/about")}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Go to About
          </button>
          <button
            onClick={() => navigate("/about")}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
          >
            Navigate to About
          </button>
        </div> */}
      {/* </main> */}
<Link href="/productlist">Go to product list</Link>
    </div>
  );
}
