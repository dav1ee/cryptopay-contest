import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';

import { ThemeProviderContext } from '@/app/theme-provider';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { imagesLight, imagesDark } from './data-images';
import styles from './styles.module.css';

import screenLight from '/public/verification/light/screen.png';
import screenDark from '/public/verification/dark/screen.png';

export function Verification({ isInView }: { isInView: boolean }) {
  const [screenImg, setScreenImg] = useState(screenLight);
  const [images, setImages] = useState(imagesLight);
  const { theme } = useContext(ThemeProviderContext);
  const isSmall = useMediaQuery('(max-width: 1110px)');

  useEffect(() => {
    if (theme === 'light') {
      setScreenImg(screenLight);
      setImages(imagesLight);
    } else {
      setScreenImg(screenDark);
      setImages(imagesDark);
    }
  }, [theme]);

  return (
    <>
      <div className={styles.screenBlock}>
        <Image
          style={{ objectFit: 'contain' }}
          src={screenImg}
          alt="Screen"
          fill
          priority
        />
        <div>
          {images.map(({ src }, index) => (
            <Image
              key={index}
              src={src}
              alt="Verification"
              className={styles.verificationImage}
              style={
                isInView
                  ? isSmall
                    ? { animationName: 'swapVerificationSm' }
                    : { animationName: 'swapVerification' }
                  : {}
              }
            />
          ))}
        </div>
      </div>

      <div className={styles.heading}>
        <h3 className="box-title">Send coins to users</h3>
        <p className="box-subtitle">
          Automate payouts to users with <a href="/">transfer</a> API
          method
        </p>
      </div>
    </>
  );
}
