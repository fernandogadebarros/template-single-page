import Image from 'next/image';
import { Heading } from '@/components/Typography/Heading';
import { Text } from '@/components/Typography/Text';
import { Button } from '@/components/Form/Button';

export const About = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto flex items-center gap-32">
        <div>
          <div className="relative flex h-[440px] w-[440px] overflow-hidden rounded-full bg-full-green">
            <Image src="/assets/image-amy.webp" alt="Amy" fill />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Heading size="md">
            I’m Amy, and I’d love to work on your next project
          </Heading>
          <Text>
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </Text>
          <Button className="w-max" variant="secondary">
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
