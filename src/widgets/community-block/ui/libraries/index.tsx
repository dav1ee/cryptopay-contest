import { LibraryItem } from './item';

import styles from './styles.module.css';

import jsPng from '/public/community-block/js.png';
import dotNetPng from '/public/community-block/dot-net.png';
import phpPng from '/public/community-block/php.png';
import pythonPng from '/public/community-block/python.png';
import goPng from '/public/community-block/go.png';

const items = [
  {
    src: jsPng,
    alt: 'JS logo',
    label: 'crypto-pay-api'
  },
  {
    src: dotNetPng,
    alt: '.NET logo',
    label: 'CryptoPay'
  },
  {
    src: phpPng,
    alt: 'PHP logo',
    label: 'crypto-pay-api'
  },
  {
    src: pythonPng,
    alt: 'Python logo',
    label: 'aiocryptopay'
  },
  {
    src: goPng,
    alt: 'GO logo',
    label: 'cryptobot-sdk-golang'
  }
];

export function CommunityLibraries() {
  return (
    <div className={styles.librariesBlock}>
      {items.map((item, index) => (
        <LibraryItem key={index} {...item} />
      ))}
    </div>
  );
}
