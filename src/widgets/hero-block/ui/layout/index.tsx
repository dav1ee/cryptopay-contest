import { Container } from '@/shared/ui';

import styles from './styles.module.css';

export function HeroBlockLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className={styles.hero}>{children}</div>
    </Container>
  );
}
