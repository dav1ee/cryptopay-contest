import { ThemeProvider } from './theme-provider';
import { Header } from '@/widgets/header';
import { HeroBlock } from '@/widgets/hero-block';
import { UsecasesBlock } from '@/widgets/usecases-block';
import { FeaturesBlock } from '@/widgets/features-block';
import { InstructionBlock } from '@/widgets/instruction-block';
import { ApiBlock } from '@/widgets/api-block';
import { CommunityBlock } from '@/widgets/community-block';
import { Footer } from '@/widgets/footer';

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <HeroBlock />
      <UsecasesBlock />
      <FeaturesBlock />
      <InstructionBlock />
      <ApiBlock />
      <div className="bottom-bg">
        <CommunityBlock />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
