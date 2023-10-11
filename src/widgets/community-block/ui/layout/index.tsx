import { Container } from '@/shared/ui';

import styles from './styles.module.css';

export function CommunityBlockLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.communityBlock}>
      <Container>
        <div className={styles.layout}>{children}</div>
      </Container>
    </div>
  );
}
