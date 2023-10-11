import { Container } from '@/shared/ui';

import styles from './styles.module.css';

export function InstructionBlockLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Container>{children}</Container>
    </div>
  );
}
