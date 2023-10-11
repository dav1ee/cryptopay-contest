import styles from './styles.module.css';

export function SliderControls({
  current,
  length,
  setSlide
}: {
  current: number;
  length: number;
  setSlide: (slide: number) => void;
}) {
  const buttons = [];

  for (let i = 0; i < length; i++) {
    buttons.push(
      <button
        key={i}
        className={`${styles.lineBtn} ${current === i && styles.active}`}
        onClick={() => setSlide(i)}
      />
    );
  }

  return (
    <div className={styles.sliderControls}>
      <p>0{current + 1}</p>
      {buttons}
      <p>0{length}</p>
    </div>
  );
}
