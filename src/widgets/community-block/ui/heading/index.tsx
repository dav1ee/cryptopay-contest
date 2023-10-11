import styles from './styles.module.css';

export function CommunityHeading() {
  return (
    <div className={styles.headingBlock}>
      <h2 className={styles.title}>Join dev community</h2>
      <p className={styles.subtitle}>
        Connect with bot developers and explore the possibilities <br />
        our crypto payments service unlocks.
      </p>
    </div>
  );
}
