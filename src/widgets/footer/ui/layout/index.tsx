import { Container } from '@/shared/ui';

import styles from './styles.module.css';

export function FooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>{children}</div>
        <p className={styles.copyright}>©2023 Crypto Bot</p>
      </Container>
    </footer>
  );
}
