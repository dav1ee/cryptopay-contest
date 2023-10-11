'use client';

import Image from 'next/image';

import { Cursor } from './cursor';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import styles from './styles.module.css';
import treePng from '/public/tree.png';

export function Commission({ isInView }: { isInView: boolean }) {
  const isSmall = useMediaQuery('(max-width: 1110px)');

  return (
    <>
      <div className={styles.buttonGroup}>
        <button style={isInView ? { animationName: 'buttonClick' } : {}}>
          <Image src={treePng} alt="Tree" width={25} height={25} />
          Create App
        </button>
        <Cursor
          style={
            isInView
              ? isSmall
                ? { animationName: 'cursorMoveInSm, cursorMoveOutSm' }
                : { animationName: 'cursorMoveIn, cursorMoveOut' }
              : {}
          }
        />
      </div>

      <div className={styles.heading}>
        <h3 className="box-title">One click to start</h3>
        <p className="box-subtitle">
          Open <a href="/">@CryptoBot</a>, go to <a href="/">Crypto Pay</a>{' '}
          <br />
          and tap Create App to get API Token
        </p>
      </div>
    </>
  );
}
