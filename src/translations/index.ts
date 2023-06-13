import en from './en/common.json';

import { appLanguages as DMALanguages } from 'aesirx-dma-app';
import { appLanguages as PIMLanguages } from 'aesirx-pim-app';

const appLanguages = { en: { ...en, ...DMALanguages.en, ...PIMLanguages.en } };

export default appLanguages;
