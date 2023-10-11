import { Container } from '@/shared/ui';
import { ApiBlockDescription } from './description';
import { ApiBlockBg } from './bg';
import { GlowingBlock } from './glowing-block';

import styles from './styles.module.css';

export function ApiBlock() {
  return (
    <Container>
      <div className={styles.apiBlock}>
        <ApiBlockDescription />
        <GlowingBlock />
        <ApiBlockBg />
      </div>
    </Container>
  );
}
