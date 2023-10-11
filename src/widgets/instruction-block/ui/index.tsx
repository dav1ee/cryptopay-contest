'use client';

import { InstructionBlockLayout as Layout } from './layout';
import { InstructionBlockTitle as Title } from './title';
import { InstructionItem as Item } from './item';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import step1Png from '/public/instruction-block/step-1.png';
import step2Png from '/public/instruction-block/step-2.png';
import step3Png from '/public/instruction-block/step-3.png';

export function InstructionBlock() {
  const isSmall = useMediaQuery('(max-width: 1150px)');

  return (
    <Layout>
      <Title />
      <Item
        count={1}
        title="Authorizing your app"
        image={step1Png}
        gradient="purple"
        width={isSmall ? 283 : 392}
        height={isSmall ? 184 : 254}
        isOdd
      />
      <Item
        count={2}
        title="Crypto Pay API Request"
        subtitle="Requests are only served over HTTPS To pass parameters use:"
        image={step2Png}
        gradient="yellow"
        width={isSmall ? 300 : 394}
        height={isSmall ? 68 : 88}
        isOdd={false}
      />
      <Item
        count={3}
        title="Getting updates"
        subtitle="There are two ways of receiving updates for your app:"
        image={step3Png}
        gradient="blue"
        width={isSmall ? 296 : 403}
        height={isSmall ? 149 : 198}
        isOdd
      />
    </Layout>
  );
}
