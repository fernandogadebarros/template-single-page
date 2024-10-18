import Image from 'next/image';
import { Heading } from '@/components/Typography/Heading';

export const Skills = () => {
  return (
    <section className="mt-8 lg:mt-20">
      <div className="container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div className="relative flex h-[300px] rounded-lg bg-full-purple p-3 lg:p-4">
          <div className="absolute right-4 h-[192px] w-[128px]">
            <Image
              src="/assets/pattern-graphic-design.svg"
              sizes="100%"
              fill
              alt="Image one"
              className="object-contain"
            />
          </div>
          <Heading
            asChild
            size="sm"
            variant="light"
            className="mt-auto text-2xl font-semibold lg:font-bold"
          >
            <h3>Graphic Design</h3>
          </Heading>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex h-[138px] gap-4 lg:gap-6">
            <div className="relative flex flex-1 rounded-lg bg-full-orange p-3 lg:p-4">
              <div className="absolute right-4 h-[64px] w-[64px]">
                <Image
                  src="/assets/pattern-ui-ux.svg"
                  sizes="100%"
                  fill
                  alt="Image one"
                  className="object-contain"
                />
              </div>
              <Heading
                asChild
                size="sm"
                variant="light"
                className="mt-auto font-semibold lg:font-bold"
              >
                <h3>Ui/UX</h3>
              </Heading>
            </div>
            <div className="relative flex flex-1 rounded-lg bg-full-pink p-3 lg:p-4">
              <div className="absolute right-4 h-[64px] w-[64px]">
                <Image
                  src="/assets/pattern-apps.svg"
                  sizes="100%"
                  fill
                  alt="Image one"
                  className="object-contain"
                />
              </div>
              <Heading
                asChild
                size="sm"
                variant="light"
                className="mt-auto font-semibold lg:font-bold"
              >
                <h3>Apps</h3>
              </Heading>
            </div>
          </div>
          <div className="relative flex h-[160px] rounded-lg bg-full-tomato p-3 lg:flex-1 lg:p-4">
            <div className="absolute right-4 h-[64px] w-[128px]">
              <Image
                src="/assets/pattern-illustrations.svg"
                sizes="100%"
                fill
                alt="Image two"
                className="object-contain"
              />
            </div>
            <Heading asChild size="sm" variant="light" className="mt-auto">
              <h3>Illustrations</h3>
            </Heading>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="relative flex h-[160px] rounded-lg bg-full-green p-3 lg:h-1/2 lg:p-4">
            <div className="absolute right-4 h-[64px] w-[160px]">
              <Image
                src="/assets/pattern-photography.svg"
                sizes="100%"
                fill
                alt="Image one"
                className="object-contain"
              />
            </div>
            <Heading asChild size="sm" variant="light" className="mt-auto">
              <h3>Photography</h3>
            </Heading>
          </div>
          <div className="relative flex h-[160px] rounded-lg bg-full-wine p-3 lg:h-1/2 lg:p-4">
            <div className="absolute right-4 h-[64px] w-[128px]">
              <Image
                src="/assets/pattern-motion-graphics.svg"
                sizes="100%"
                fill
                alt="Image one"
                className="object-contain"
              />
            </div>
            <Heading asChild size="sm" variant="light" className="mt-auto">
              <h3>Motion Graphics</h3>
            </Heading>
          </div>
        </div>
      </div>
    </section>
  );
};
