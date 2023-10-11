import { Container } from '@/shared/ui';

import styles from './styles.module.css';

export function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.inner}>{children}</div>
      </Container>
    </div>
  );
}
