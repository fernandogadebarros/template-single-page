import { Button } from '@/components/Form/Button';
import { Logo } from '@/components/Media/Logo';

export const Header = () => {
  return (
    <header className="mt-8">
      <div className="container mx-auto flex items-center justify-between">
        <Logo className="h-12 w-12" />
        <Button>Free Consultation</Button>
      </div>
    </header>
  );
};
