import { Heading } from '@/components/Typography/Heading';
import { Button } from '@/components/Form/Button';
import { Text } from '@/components/Typography/Text';

export const Contact = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between rounded-lg bg-write-dark p-10 lg:flex-row">
          <div className="flex max-w-[480px] flex-col gap-4">
            <Heading
              asChild
              variant="light"
              size="md"
              className="text-center text-3xl lg:text-left lg:text-4xl/tight"
            >
              <h3>Book a call with me</h3>
            </Heading>
            <Text variant="light" className="text-center lg:text-left">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </Text>
          </div>
          <Button variant="secondary" className="mt-6 lg:mt-0">
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
