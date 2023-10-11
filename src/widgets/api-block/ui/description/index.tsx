import { RoundedButton } from '@/shared/ui';

import styles from './styles.module.css';

export function ApiBlockDescription() {
  return (
    <div className={styles.descriptionBlock}>
      <h2 className={styles.title}>Crypto Pay API</h2>
      <p className={styles.subtitle}>
        Explore available methods and types <br /> and integrate them in
        any programming language.
      </p>
      <RoundedButton label="Open API Docs" variant="general" />
    </div>
  );
}
