import en from './en/common.json';

import { appLanguages as DMALanguages } from 'aesirx-dma-app';
import { appLanguages as PIMLanguages } from 'aesirx-pim-app';
import { appLanguages as CRMLanguages } from 'aesirx-crm-app';
import { appLanguages as ContentLanguages } from 'aesirx-content-app';
import { appLanguages as BILanguages } from 'aesirx-bi-app';

const appLanguages = {
  en: {
    ...en,
    ...DMALanguages.en,
    ...PIMLanguages.en,
    ...CRMLanguages.en,
    ...ContentLanguages.en,
    ...BILanguages.en,
  },
};

export default appLanguages;
