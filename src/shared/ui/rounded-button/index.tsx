import styles from './styles.module.css';

export function RoundedButton({
  label,
  variant
}: {
  label: string;
  variant: string;
}) {
  return (
    <button className={`${styles.button} ${variant}`}>{label}</button>
  );
}
