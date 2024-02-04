import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import AboutUsPage from '../components/AboutUs';
import ServicesPage from '../components/ServicesPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bay Multistruct</title>
        <meta name='description' content='Building Your sucess Brick by Brick' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='Bay Multistruct' message='Building your future step by step.' />
      <AboutUsPage/>
      <Slider slides={SliderData} />
      <ServicesPage />
    </div>
  );
}
