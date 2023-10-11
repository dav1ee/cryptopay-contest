import { StaticImageData } from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { GradientBlock } from '@/shared/ui';
import { ItemDescription } from './description';

import styles from './styles.module.css';

export function InstructionItem({
  count,
  title,
  subtitle,
  image,
  gradient,
  width,
  height,
  isOdd
}: {
  count: number;
  title: string;
  subtitle?: string | null;
  image: StaticImageData;
  gradient: string;
  width: number;
  height: number;
  isOdd: boolean;
}) {
  const isSmall = useMediaQuery('(max-width: 1150px)');

  return (
    <div className={`${styles.item} ${isOdd ? styles.odd : styles.even}`}>
      <ItemDescription count={count} title={title} subtitle={subtitle} />
      <GradientBlock
        image={image}
        gradient={gradient}
        width={width}
        height={height}
        style={
          isSmall
            ? { width: '335px', height: '277px' }
            : { width: '590px', height: '488px' }
        }
      />
    </div>
  );
}
