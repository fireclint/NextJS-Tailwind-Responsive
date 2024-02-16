/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from 'next/image';
import Head from "next/head";

const ServicesPage = () => {
  return (
    <div className="max-container py-12" style={{ background: "linear-gradient(to right, #FFD700, #001F3F)" }}>
      {/* Head section ... */}
      <Head>
        <title>Bay Multistruct - Services</title>
        <meta
          name="description"
          content="Explore our comprehensive infrastructure and construction services."
        />
        {/* Add more SEO metadata as needed */}
      </Head>

      {/* Service Highlights */}
      <section className="service-highlights max-container py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-card bg-white p-4 rounded-md shadow-md">
            {/* Icon */}
            <div className="service-icon">
              <Image src="/labour-day.png" alt="Labour Supply" width={48} height={48} />
            </div>
            {/* Description */}
            <p className="font-semibold">Labour Supply</p>
            <p className="text-gray-600">Skilled and reliable workforce for your projects.</p>
          </div>
          {/* Service 2 */}
          <div className="service-card bg-white p-4 rounded-md shadow-md">
            {/* Icon */}
            <div className="service-icon">
              <Image src="/house.png" alt="Renovation & Maintenance" width={48} height={48} />
            </div>
            {/* Description */}
            <p className="font-semibold">Renovation & Maintenance</p>
            <p className="text-gray-600">Transform and maintain your spaces with our expertise.</p>
          </div>
          {/* Service 3 */}
          <div className="service-card bg-white p-4 rounded-md shadow-md">
            {/* Icon */}
            <div className="service-icon">
              <Image src="/wallpaper.png" alt="Building Construction" width={48} height={48} />
            </div>
            {/* Description */}
            <p className="font-semibold">Building Construction</p>
            <p className="text-gray-600">Quality construction services tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="intro-section text-center py-8 mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Bay Multistruct - Building Your Vision, From Blueprint to Reality
        </h1>
        <p className="text-xl text-gray-700">
          Welcome to Bay Multistruct, your one-stop solution for comprehensive
          infrastructure and construction needs. We're a team of passionate
          architects, civil engineers, and construction professionals dedicated
          to delivering your projects with expertise, efficiency, and unwavering
          commitment to quality.
        </p>
      </section>

      {/* Services section */}
      <section className="services-section grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Infrastructure Development */}
        <div className="service-category bg-white p-4 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            1. Infrastructure Development
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Labour supply:</strong> We provide skilled and reliable
              labour for all types of infrastructure projects, ensuring timely
              completion and adherence to safety regulations.
            </li>
            {/* Add more points as needed */}
          </ul>
        </div>

        {/* Building Construction */}
        <div className="service-category bg-white p-4 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            2. Building Construction
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Concept to completion:</strong> We bring your dreams to
              life, translating your vision into tangible structures through
              innovative and cost-effective construction solutions.
            </li>
            {/* Add more points as needed */}
          </ul>
        </div>

        {/* Include service descriptions for the remaining categories here */}
      </section>

      {/* Why Choose Bay Multistruct? section */}
      <section className="why-choose-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          Why Choose Bay Multistruct?
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Experience and Expertise:</strong> With a team of qualified
            professionals and a proven track record, we deliver unmatched
            expertise in every aspect of infrastructure and construction.
          </li>
          {/* Add more points as needed */}
        </ul>
      </section>

      <section className="contact-section text-center">
        <p className="text-lg mb-4">
          Contact us today to discuss your next infrastructure or construction
          project. We're here to collaborate with you and turn your vision into
          a tangible reality.
        </p>
        {/* Add a contact button or form here */}
      </section>
    </div>
  );
};

export default ServicesPage;
