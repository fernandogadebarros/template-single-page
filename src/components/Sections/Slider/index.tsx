'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Heading } from '@/components/Typography/Heading';
import { Button } from '@/components/Form/Button';
import { slides } from './data';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidePreviousHandler = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => prev - 1);
  };

  const slideNextHandler = () => {
    setCurrentSlide((prev) =>
      currentSlide === slides.length - 4 ? 0 : prev + 1,
    );
  };

  return (
    <section>
      <Heading className="mb-14 mt-20 text-center text-3xl">My Work</Heading>
      <div className="relative flex h-[400px] overflow-x-hidden">
        <div
          className={`flex h-full w-max gap-6 transition-all duration-1000 ease-in-out`}
          style={{ transform: `translateX(-${currentSlide * 104}vw)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-auto w-[33vw]">
              <Image
                src={slide.src}
                alt={slide.alt}
                sizes="100vw"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex w-full justify-center gap-4">
        <Button
          onClick={slidePreviousHandler}
          className="relative flex h-12 w-12 items-center justify-center rounded-full p-0"
        >
          <Image
            src="/assets/icon-arrow-left.svg"
            alt="Arrow Left"
            width={12}
            height={12}
          />
        </Button>
        <Button
          onClick={slideNextHandler}
          className="relative flex h-12 w-12 items-center justify-center rounded-full p-0"
        >
          <Image
            src="/assets/icon-arrow-right.svg"
            alt="Arrow Right"
            width={12}
            height={12}
          />
        </Button>
      </div>
    </section>
  );
};
