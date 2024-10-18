import Image from 'next/image';
import { Heading } from '@/components/Typography/Heading';
import { Text } from '@/components/Typography/Text';
import { Button } from '@/components/Form/Button';

export const About = () => {
  return (
    <section className="mt-24 lg:mt-32">
      <div className="container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-32">
        <div>
          <div className="relative flex h-[300px] w-[300px] overflow-hidden rounded-full bg-full-green lg:h-[440px] lg:w-[440px]">
            <Image src="/assets/image-amy.webp" alt="Amy" fill />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8">
          <Heading
            asChild
            size="sm"
            className="mx-auto max-w-[320px] text-center text-2xl lg:max-w-max lg:text-left lg:text-4xl/tight"
          >
            <h2>I’m Amy, and I’d love to work on your next project</h2>
          </Heading>
          <Text className="text-center lg:text-left">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </Text>
          <Button className="mx-auto w-max lg:mx-0" variant="secondary">
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
