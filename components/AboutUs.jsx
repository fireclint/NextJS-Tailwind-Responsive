import React from "react";
import Head from "next/head";
import Image from "next/image";

const AboutUsPage = () => {
  // Define primary color
  const primaryColor = "#336699"; // Change to your preferred primary color

  return (
    <div className="max-container py-12" style={{ background: "linear-gradient(to right, #FFD700, #001F3F)" }}>
      {/* Head section ... */}
      <Head>
        <title>Bay Multistruct - About Us</title>
        <meta
          name="description"
          content="Learn more about Bay Multistruct, our vision, mission, and core values."
        />
        {/* Add more SEO metadata as needed */}
      </Head>

      {/* About Us Section */}
      <section className="p-8 bg-white rounded-md shadow-md md:flex items-center justify-center">
        {/* Image to the left for larger screens */}
        <div className="mr-8 hidden md:block">
          <Image src="/hero2.jpg" alt="About Us Image" width={900} height={500} />
        </div>

        {/* Text content */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">About Bay Multistruct</h1>
          <p className="text-xl text-gray-700">
            Bay Multistruct is a respected contractor committed to delivering beyond expectations.
            With a focus on quality, value, and efficiency, we strive to achieve excellence
            in every project we undertake.
          </p>
        </div>

        {/* Image as a background for smaller screens */}
        <div className="md:hidden">
          <div
            className="bg-cover bg-center w-full h-40 mb-4"
            style={{ backgroundImage: `url('/hero2.jpg')` }}
          />
        </div>
      </section>

      {/* Container for Vision, Mission, Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white rounded-md shadow-md mb-8">
        {/* Vision Section */}
        <div className="border border-primary rounded-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-opacity-0">
          <div className="p-4 flex flex-col items-center">
            <Image src="/vision-1.png" alt="Vision Image" width={80} height={80} />
            <h2 className="text-3xl font-bold mb-4 text-primary">Vision</h2>
            <p className="text-xl text-gray-700 text-center">
              To be a respectable contractor delivering beyond expectation, always.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="border border-primary rounded-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-opacity-0">
          <div className="p-4 flex flex-col items-center">
            <Image src="/mission.png" alt="Mission Image" width={80} height={80} />
            <h2 className="text-3xl font-bold mb-4 text-primary">Mission</h2>
            <p className="text-xl text-gray-700 text-center">
              To procure projects at competitive pricing, provide safe working conditions,
              and deliver quality work within a reasonable time frame.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="border border-primary rounded-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-opacity-0">
          <div className="p-4 flex flex-col items-center">
            <Image src="/corevalues.jpg" alt="Core Values Image" width={80} height={80} />
            <h2 className="text-3xl font-bold mb-4 text-primary">Core Values</h2>
            <ul className="list-inside text-gray-700 text-center">
            <li>Accountability</li>
            <li>Discipline</li>
              <li>Quality</li>
              <li>Value</li>              
              <li>Integrity</li>              
              <li>Delivery</li>
             
              <li>Efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
