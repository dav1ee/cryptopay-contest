import { Logo, Nav, RoundedButton } from '@/shared/ui';
import { FooterLayout } from './layout';

export function Footer() {
  return (
    <FooterLayout>
      <Logo />
      <Nav />
      <RoundedButton label="Get started" variant="secondary" />
    </FooterLayout>
  );
}
