import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

import styles from './styles.module.css';

export function GradientBlock({
  image,
  gradient,
  width,
  height,
  style
}: {
  image: StaticImageData;
  gradient: string;
  width: number;
  height: number;
  style: CSSProperties;
}) {
  return (
    <div
      className={`${styles.gradientBlock} bg-gradient-${gradient}`}
      style={style}>
      <Image src={image} alt="" width={width} height={height} priority />
    </div>
  );
}
