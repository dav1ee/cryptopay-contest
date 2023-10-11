import Image from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { images } from './data-images';
import styles from './styles.module.css';

export function Statistics({ isInView }: { isInView: boolean }) {
  const isSmall = useMediaQuery('(max-width: 1110px)');
  const imgWidth = isSmall ? 271 : 580;
  const imgHeight = isSmall ? 281 : 526;

  return (
    <>
      <div className={styles.bg}>
        {images.map(({ src }, index) => (
          <Image
            key={index}
            src={src}
            alt=""
            width={imgWidth}
            height={imgHeight}
            style={isInView ? { animationName: 'changeImgOpacity' } : {}}
          />
        ))}
      </div>

      <div className={styles.heading}>
        <h3 className="box-title">Payment statistics</h3>
        <p className="box-subtitle">
          Open <a href="/">@CryptoBot</a>, go to <a href="/">Crypto Pay</a>{' '}
          and <a href="/">My Apps</a>, <br />
          App Name to get Statistics
        </p>
      </div>
    </>
  );
}
