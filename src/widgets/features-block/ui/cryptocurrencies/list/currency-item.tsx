import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.css';

export function CurrencyItem({
  img,
  label,
  isInView
}: {
  img: StaticImageData;
  label: string;
  isInView: boolean;
}) {
  return (
    <div
      className={styles.currencyItem}
      style={isInView ? { animationName: 'scale' } : {}}>
      <Image src={img} alt={label} />
      <p>{label}</p>
    </div>
  );
}
