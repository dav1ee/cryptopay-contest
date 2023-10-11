import { RoundedButton } from '@/shared/ui';
import { HeroBots } from './bots';

import styles from './styles.module.css';

export function HeroDescription() {
  return (
    <div className={styles.description}>
      <div>
        <h1 className={styles.title}>
          Crypto payments for <span>telegram bots</span>
        </h1>
        <h2 className={styles.subtitle}>
          Seamlessly accept crypto payments <br /> in your Telegram bots
          and services.
        </h2>
        <RoundedButton label="Get started" variant="general" />
      </div>
      <HeroBots />
    </div>
  );
}
