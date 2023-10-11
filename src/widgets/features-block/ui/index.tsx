'use client';

import { useRef } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { useOnScreen } from '@/hooks/useOnScreen';
import { Container } from '@/shared/ui';
import { Box } from './box';
import { Cryptocurrencies } from './cryptocurrencies';
import { Commission } from './commission';
import { Exchange } from './exchange';
import { Statistics } from './statistics';
import { Verification } from './verification';
import { Anonymous } from './anonymous-payments';

import styles from './styles.module.css';

export function FeaturesBlock() {
  const featuresBlockRef = useRef<HTMLDivElement>(null);
  const isInView = useOnScreen(featuresBlockRef);
  const isSmall = useMediaQuery('(max-width: 1110px)');
  const boxPadding = isSmall
    ? { padding: '32px' }
    : { padding: '42px 56px' };

  return (
    <div ref={featuresBlockRef} className={styles.featuresBlock}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.center}>
            <Box style={boxPadding}>
              <Cryptocurrencies isInView={isInView} />
            </Box>
          </div>

          <div className={styles.row}>
            <div className={styles.left}>
              <Box style={boxPadding}>
                <Commission isInView={isInView} />
              </Box>

              <Box style={boxPadding}>
                <Exchange isInView={isInView} />
              </Box>
            </div>

            <div className={styles.right}>
              <Box style={boxPadding}>
                <Statistics isInView={isInView} />
              </Box>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.verification}>
              <Box
                style={
                  isSmall
                    ? { padding: '0 32px 32px 32px' }
                    : { padding: '0 42px 42px 42px' }
                }>
                <Verification isInView={isInView} />
              </Box>
            </div>

            <div className={styles.anonymous}>
              <Box
                style={
                  isSmall ? { padding: '32px' } : { padding: '42px' }
                }>
                <Anonymous isInView={isInView} />
              </Box>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
