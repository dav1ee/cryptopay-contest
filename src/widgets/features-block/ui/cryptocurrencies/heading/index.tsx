import styles from './styles.module.css';

export function Heading() {
  return (
    <div className={styles.heading}>
      <h3 className="box-title">
        Accept a wide range of cryptocurrencies
      </h3>
      <p className="box-subtitle">
        Bill any supported cryptocurrencies with asset parameter in{' '}
        <a href="/">GetInvoice</a> method
      </p>
    </div>
  );
}
