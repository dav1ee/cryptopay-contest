'use client';

import Image from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import bgImg from '/public/api-block/api-block-bg.png';
import bgSmallImg from '/public/api-block/api-block-bg-small.png';

export function ApiBlockBg() {
  const isSmall = useMediaQuery('(max-width: 650px)');

  return (
    <Image
      src={isSmall ? bgSmallImg : bgImg}
      alt="bg"
      fill
      style={{ objectFit: 'cover' }}
    />
  );
}
