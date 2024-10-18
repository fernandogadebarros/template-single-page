import React from 'react';
import { Heading } from '@/components/Typography/Heading';
import { Button } from '@/components/Form/Button';
import { Text } from '@/components/Typography/Text';

export const Contact = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between rounded-lg bg-write-dark p-10">
          <div className="flex max-w-[480px] flex-col gap-4">
            <Heading asChild variant="light" size="md">
              <h3>Book a call with me</h3>
            </Heading>
            <Text variant="light">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </Text>
          </div>
          <Button variant="secondary">Free Consultation</Button>
        </div>
      </div>
    </section>
  );
};
