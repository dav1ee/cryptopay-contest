import Image from 'next/image';

import { images } from './data-images';
import styles from './styles.module.css';

export function Anonymous({ isInView }: { isInView: boolean }) {
  return (
    <>
      <div className={styles.imagesBlock}>
        {images.map(({ src }, index) => (
          <Image
            key={index}
            src={src}
            alt="Commissions"
            style={isInView ? { animationName: 'swapPayments' } : {}}
          />
        ))}
      </div>

      <div className={styles.heading}>
        <h3 className="box-title">Anonymous payments</h3>
        <p className="box-subtitle">
          Use allow_anonymous parameter
          <br />
          in <a href="/">createInvoice</a> method to give user <br />
          an option to remain private
        </p>
      </div>
    </>
  );
}
