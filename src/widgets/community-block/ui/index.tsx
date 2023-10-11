import { RoundedButton } from '@/shared/ui';
import { CommunityBlockLayout } from './layout';
import { CommunityHeading } from './heading';
import { CommunityLibraries } from './libraries';

export function CommunityBlock() {
  return (
    <CommunityBlockLayout>
      <CommunityHeading />
      <CommunityLibraries />
      <RoundedButton label="Open Devs chat" variant="general" />
    </CommunityBlockLayout>
  );
}
