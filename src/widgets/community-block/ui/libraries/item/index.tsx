import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.css';

export function LibraryItem({
  src,
  alt,
  label
}: {
  src: StaticImageData;
  alt: string;
  label: string;
}) {
  return (
    <div className={styles.item}>
      <div className={styles.imgBlock}>
        <Image src={src} alt={alt} />
      </div>

      <p>{label}</p>
    </div>
  );
}
