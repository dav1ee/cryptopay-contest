'use client';

import { Content } from './content';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import styles from './styles.module.css';

export function ItemDescription({
  count,
  title,
  subtitle = null
}: {
  count: number;
  title: string;
  subtitle?: string | null;
}) {
  const isSmall = useMediaQuery('(max-width: 650px)');

  if (isSmall) {
    return (
      <div className={styles.descriptionBlock}>
        <div className={styles.heading}>
          <div className={styles.count}>{count}</div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        {subtitle !== null && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
        <Content count={count} />
      </div>
    );
  }

  return (
    <div className={styles.descriptionBlock}>
      <div className={styles.count}>{count}</div>
      <h3 className={styles.title}>{title}</h3>
      {subtitle !== null && <p className={styles.subtitle}>{subtitle}</p>}
      <Content count={count} />
    </div>
  );
}
