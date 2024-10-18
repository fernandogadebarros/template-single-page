import { Heading } from '@/components/Typography/Heading';
import { Text } from '@/components/Typography/Text';

export const Hero = () => {
  return (
    <section className="container mx-auto mt-8 flex flex-col items-center justify-center lg:mt-16">
      <Heading className="text-center">Design solutions made easy</Heading>
      <Text className="mt-4 max-w-[285px] text-center lg:max-w-600">
        With over ten years of experience in various design disciplines, I’m
        your one-stop shop for your design needs.
      </Text>
    </section>
  );
};
