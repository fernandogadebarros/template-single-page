'use client';
import Image from 'next/image';
import { Heading } from '@/components/Typography/Heading';
import { slides } from './data';
import SlickSlide from 'react-slick';

export const Slider = () => {
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };

  const settings = {
    infinite: true,
    centerMode: true,
    customPadding: '50px',
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Heading className="mb-14 mt-20 text-center text-3xl">My Work</Heading>
      <div className="slider-container">
        <SlickSlide {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative mx-4 h-[30vh] w-[100vw] rounded-lg lg:h-[40vh] lg:w-[33vw]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                sizes="100vw"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </SlickSlide>
      </div>
    </section>
  );
};
