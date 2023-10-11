import { CSSProperties } from 'react';

import styles from './styles.module.css';

export function Box({
  children,
  style
}: {
  children: React.ReactNode;
  style: CSSProperties;
}) {
  return (
    <div className={styles.box} style={style}>
      {children}
    </div>
  );
}
