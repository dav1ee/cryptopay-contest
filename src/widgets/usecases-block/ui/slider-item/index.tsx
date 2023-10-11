import { StaticImageData } from 'next/image';

import { GradientBlock, RoundedButton } from '@/shared/ui';
import { adaptString } from '@/utils/adapt-string';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import styles from './styles.module.css';

export function SliderItem({
  image,
  gradient,
  width,
  height,
  titleBlue,
  title,
  subtitle,
  style
}: {
  image: StaticImageData;
  gradient: string;
  width: {
    normal: number;
    small: number;
  };
  height: {
    normal: number;
    small: number;
  };
  titleBlue: string;
  title: string;
  subtitle: string;
  style: any;
}) {
  const isSmall = useMediaQuery('(max-width: 1175px)');

  return (
    <div className={styles.sliderItem} style={style}>
      <GradientBlock
        image={image}
        gradient={gradient}
        width={isSmall ? width.small : width.normal}
        height={isSmall ? height.small : height.normal}
        style={
          isSmall
            ? { width: '335px', height: '335px' }
            : { width: '488px', height: '488px' }
        }
      />
      <div className={styles.description}>
        <h2 className={styles.title}>
          <span>
            {isSmall
              ? adaptString(titleBlue, 'withoutBr')
              : adaptString(titleBlue, 'withBr')}
          </span>{' '}
          <br /> {title}
        </h2>
        <p className={styles.subtitle}>
          {isSmall
            ? adaptString(subtitle, 'withoutBr')
            : adaptString(subtitle, 'withBr')}
        </p>
        <RoundedButton label="Open API Docs" variant="general" />
      </div>
    </div>
  );
}
