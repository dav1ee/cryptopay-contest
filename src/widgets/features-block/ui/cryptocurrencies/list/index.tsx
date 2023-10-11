import { CurrencyItem } from './currency-item';
import { data as currencies } from './data';

import styles from './styles.module.css';

export function CurrenciesList({ isInView }: { isInView: boolean }) {
  return (
    <div className={styles.currenciesList}>
      {currencies.map(({ img, label }, index) => (
        <CurrencyItem
          key={index}
          img={img}
          label={label}
          isInView={isInView}
        />
      ))}
    </div>
  );
}
