"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const About = () => {
  const router = useRouter();
  return (
    <div className="about">
      <h1> About Us</h1>
      {/* Button for programmatic navigation */}
      <button onClick={() => router.push("/")}>Go to Home</button>

      {/* Corrected Link usage */}
      <Link href="/about/aboutcollege">About College</Link>
      <Link href="/about/aboutstudent">About student</Link>
    </div>
  );
};   

export default About;
