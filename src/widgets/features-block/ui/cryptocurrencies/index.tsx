import { Heading } from './heading';
import { CurrenciesList } from './list';

import styles from './styles.module.css';

export function Cryptocurrencies({ isInView }: { isInView: boolean }) {
  return (
    <div className={styles.cryptocurrencies}>
      <Heading />
      <CurrenciesList isInView={isInView} />
    </div>
  );
}
