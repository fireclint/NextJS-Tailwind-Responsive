import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link' directly

const Hero = () => {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <Image
        src="/hero1.png" // Replace with your actual hero image
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        objectPosition="center bottom" // Adjust this line to position the image at the lower quarter
      />
      <div className="hero-content absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-4 py-8 text-center">
        {/* Add your logo or text here */}
        <h1 className="text-4xl font-bold mb-4">Professional Construction Services</h1>
        <h2 className="text-2xl font-bold mb-4">Building Your Success, Brick By Brick</h2>
        <p className="text-base text-gray-300 mb-8">
          Your trusted construction partner for quality projects and client satisfaction.
        </p>
        {/* Replace with your desired buttons */}
        <div className="flex items-center justify-center gap-4">
          <Link href="/services">
            <a className="btn btn-primary py-5">Explore Services</a>
          </Link>
          <Link href="/contact">
            <a className="btn btn-outline py-5">Get a Quote</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
