'use client';

import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';

import { ThemeProviderContext } from '@/app/theme-provider';
import styles from './styles.module.css';

import imgPhoneLight from '/public/hero-block/img-phone-light.png';
import imgPhoneDark from '/public/hero-block/img-phone-dark.png';

export function HeroPhone() {
  const [phoneImg, setPhoneImg] = useState(imgPhoneLight);
  const { theme } = useContext(ThemeProviderContext);

  useEffect(() => {
    theme === 'light'
      ? setPhoneImg(imgPhoneLight)
      : setPhoneImg(imgPhoneDark);
  }, [theme]);

  return (
    <div className={styles.phone}>
      <Image
        src={phoneImg}
        alt="Screen"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
