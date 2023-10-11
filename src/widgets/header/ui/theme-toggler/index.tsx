import { useState, useEffect } from 'react';
import Image from 'next/image';

import sunPng from '/public/sun.png';
import moonPng from '/public/moon.png';

import styles from './styles.module.css';

export function ThemeToggler({
  theme,
  toggle
}: {
  theme: string;
  toggle: () => void;
}) {
  const [togglerImg, setTogglerImg] = useState(sunPng);

  useEffect(() => {
    theme === 'light' ? setTogglerImg(sunPng) : setTogglerImg(moonPng);
  }, [theme]);

  return (
    <button className={styles.themeBtn} onClick={toggle}>
      <Image src={togglerImg} alt="" width={32} height={32} />
    </button>
  );
}
