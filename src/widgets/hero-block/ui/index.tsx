import { HeroBlockLayout } from './layout';
import { HeroDescription } from './description';
import { HeroPhone } from './phone';

export function HeroBlock() {
  return (
    <HeroBlockLayout>
      <HeroDescription />
      <HeroPhone />
    </HeroBlockLayout>
  );
}
