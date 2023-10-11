import Image from 'next/image';

import styles from './styles.module.css';
import logoPng from '/public/logo.png';

export function Logo() {
  return <Image src={logoPng} alt="logo" className={styles.logo} />;
}
