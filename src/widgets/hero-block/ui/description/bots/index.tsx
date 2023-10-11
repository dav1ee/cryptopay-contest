import Image from 'next/image';

import styles from './styles.module.css';

import bot1Png from '/public/hero-block/bot-1.png';
import bot2Png from '/public/hero-block/bot-2.png';
import bot3Png from '/public/hero-block/bot-3.png';
import bot4Png from '/public/hero-block/bot-4.png';
import bot5Png from '/public/hero-block/bot-5.png';

export function HeroBots() {
  return (
    <div className={styles.bots}>
      <div className={styles.botsImages}>
        <Image src={bot1Png} alt="Bot" />
        <Image src={bot2Png} alt="Bot" />
        <Image src={bot3Png} alt="Bot" />
        <Image src={bot4Png} alt="Bot" />
        <Image src={bot5Png} alt="Bot" />
      </div>
      <p>Popular bots use Crypto Pay</p>
    </div>
  );
}
