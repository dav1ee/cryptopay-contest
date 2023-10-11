import Image from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Arrow } from './arrow';

import styles from './styles.module.css';

import tonPng from '/public/cryptocurrencies/ton.png';
import btcPng from '/public/cryptocurrencies/btc.png';
import usdtPng from '/public/cryptocurrencies/usdt.png';

export function Exchange({ isInView }: { isInView: boolean }) {
  const isSmall = useMediaQuery('(max-width: 1110px)');

  return (
    <>
      <div className={styles.currenciesExchange}>
        <div className={styles.coins}>
          <div
            className={styles.coin}
            style={
              isInView
                ? isSmall
                  ? { animationName: 'swapUsdtSm' }
                  : { animationName: 'swapUsdt' }
                : {}
            }>
            <Image src={usdtPng} alt="USDT" />
          </div>
          <div
            className={styles.coin}
            style={
              isInView
                ? isSmall
                  ? { animationName: 'swapBtcSm' }
                  : { animationName: 'swapBtc' }
                : {}
            }>
            <Image src={btcPng} alt="BTC" />
          </div>
          <div
            className={styles.coin}
            style={
              isInView
                ? isSmall
                  ? { animationName: 'swapTonSm' }
                  : { animationName: 'swapTon' }
                : {}
            }>
            <Image src={tonPng} alt="TON" />
          </div>
        </div>
        <div className={styles.arrows}>
          <span>
            <Arrow direction="right" />
          </span>
          <span>
            <Arrow direction="left" />
          </span>
        </div>
        <div className={styles.dollar}>$</div>
      </div>

      <div>
        <h3 className="box-title">
          Real-time <br /> exchange rates
        </h3>
        <p className="box-subtitle">
          Request up to date currency rate with the{' '}
          <a href="/">getExchangeRates</a> API method
        </p>
      </div>
    </>
  );
}
