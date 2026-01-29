import { UmiPlugin } from '@trezoaplex-foundation/umi';
import { createTrzRewardsProgram } from './generated';

export const Rewards = (): UmiPlugin => ({
  install(umi) {
    umi.programs.add(createTrzRewardsProgram(), false);
  },
});
