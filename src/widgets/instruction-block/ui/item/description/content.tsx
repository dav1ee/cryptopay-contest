import styles from './styles.module.css';

export function Content({ count }: { count: number }) {
  if (count === 1) {
    return (
      <ol className={styles.content}>
        <li>
          Open <a href="/">@CryptoBot</a>
        </li>
        <li>
          Go to <a href="/">Crypto Pay</a>
        </li>
        <li>
          Tap <a href="/">Create App</a>
        </li>
        <li>
          Get <a href="/">API Token</a>
        </li>
      </ol>
    );
  }

  if (count === 2) {
    return (
      <ul className={styles.content}>
        <li>
          <a href="/">URL query string</a>
        </li>
        <li>
          <a href="/">application/json</a>
        </li>
        <li>
          <a href="/">application/x-www-form-urlencoded</a>
        </li>
        <li>
          <a href="/">multipart/form-data</a>
        </li>
      </ul>
    );
  }

  if (count === 3) {
    return (
      <ul className={styles.content}>
        <li>
          <a href="/">getInvoices</a> method to get a list of created
          invoices.
        </li>
        <li>
          <a href="/">Webhooks</a> to receive updates in realtime.
        </li>
      </ul>
    );
  }
}
