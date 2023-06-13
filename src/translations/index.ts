import en from './en/common.json';

import { appLanguages as DMALanguages } from 'aesirx-dma-app';
import { appLanguages as PIMLanguages } from 'aesirx-pim-app';
import { appLanguages as CRMLanguages } from 'aesirx-crm-app';

const appLanguages = { en: { ...en, ...DMALanguages.en, ...PIMLanguages.en, ...CRMLanguages.en } };

export default appLanguages;
