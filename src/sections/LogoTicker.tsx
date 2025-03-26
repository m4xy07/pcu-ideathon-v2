'use client';
import pythonLogo from '@/assets/python-logo.png';
import raspberryLogo from '@/assets/raspberry-logo.png';
import opencvLogo from '@/assets/opencv-logo.png';
import deepfaceLogo from '@/assets/deepface-logo.png';
import mongodbLogo from '@/assets/mongodb-logo.png';
import githubLogo from '@/assets/github-logo.png';
import {motion} from 'framer-motion';
import Image from 'next/image';

export const LogoTicker = () => {
  return (
  <section className='py-20 md:py-24'>
    <div className="container">
      <div className='flex flex-col items-center text-lg gap-6 tracking-[0.2px]'>
          <h2>Associated with</h2>
          <Image src="/images/IIC_Logo.png" alt="IIC Logo" width={1920} height={1080} className="w-36 h-16" />
      </div>
    </div>

    </section>
  );
};
