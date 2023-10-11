import styles from './styles.module.css';

const navItems = [
  {
    path: '/',
    label: 'Use cases'
  },
  {
    path: '/',
    label: 'Features'
  },
  {
    path: '/',
    label: 'How to start'
  }
];

export function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.item}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
