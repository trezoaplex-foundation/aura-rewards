/* eslint-disable import/no-extraneous-dependencies */
import { createUmi as basecreateUmi } from '@trezoaplex-foundation/umi-bundle-tests';
import { Rewards } from '../src';

export const createUmi = async () =>
  (await basecreateUmi()).use(Rewards());
