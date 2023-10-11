'use client';

import { useState, useRef } from 'react';

import { Container } from '@/shared/ui';
import { SliderItem } from './slider-item';
import { SliderControls } from './slider-controls';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { data as slides } from './data';
import styles from './styles.module.css';

export function UsecasesBlock() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const length = slides.length;
  const isXAxis = useMediaQuery('(max-width: 1175px)');

  const setSlide = (slide: number) => setCurrentSlide(slide);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }

    if (touchStart - touchEnd < -50 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className={styles.usecasesBlock}>
      <Container>
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={styles.slider}>
          <div className={styles.wrapper}>
            {slides.map((slide, index) => (
              <SliderItem
                key={index}
                {...slide}
                style={{
                  transform: `${isXAxis ? 'translateX' : 'translateY'}(${
                    (index - currentSlide) * 150
                  }%)`
                }}
              />
            ))}
          </div>
          <SliderControls
            current={currentSlide}
            length={length}
            setSlide={setSlide}
          />
        </div>
      </Container>
    </div>
  );
}
