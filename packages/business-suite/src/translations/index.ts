import common_dk from './dk/common.json';
import common_en from './en/common.json';
import common_es from './es/common.json';
import common_hr from './hr/common.json';
import common_th from './th/common.json';
import common_ua from './ua/common.json';
import common_vn from './vi/common.json';

import { appLanguages as DMALanguages } from 'aesirx-dma-app';
import { appLanguages as PIMLanguages } from 'aesirx-pim-app';
import { appLanguages as CRMLanguages } from 'aesirx-crm-app';
import { appLanguages as ContentLanguages } from 'aesirx-content-app';
import { appLanguages as BILanguages } from 'aesirx-bi-app';

const appLanguages = {
  en: {
    ...common_en,
    ...DMALanguages.en,
    ...PIMLanguages.en,
    ...CRMLanguages.en,
    ...ContentLanguages.en,
    ...BILanguages.en,
  },
  da: {
    ...common_dk,
    ...DMALanguages.da,
    ...PIMLanguages.da,
    ...CRMLanguages.da,
    ...ContentLanguages.da,
    ...BILanguages.da,
  },
  vi: {
    ...common_vn,
    ...DMALanguages.vi,
    ...PIMLanguages.vi,
    ...CRMLanguages.vi,
    ...ContentLanguages.vi,
    ...BILanguages.vi,
  },
  th: {
    ...common_th,
    ...DMALanguages.th,
    ...PIMLanguages.th,
    ...CRMLanguages.th,
    ...ContentLanguages.th,
    ...BILanguages.th,
  },
  hr: {
    ...common_hr,
    ...DMALanguages.hr,
    ...PIMLanguages.hr,
    ...CRMLanguages.hr,
    ...ContentLanguages.hr,
    ...BILanguages.hr,
  },
  uk: {
    ...common_ua,
    ...DMALanguages.uk,
    ...PIMLanguages.uk,
    ...CRMLanguages.uk,
    ...ContentLanguages.uk,
    ...BILanguages.uk,
  },
  es: {
    ...common_es,
    ...DMALanguages.es,
    ...PIMLanguages.es,
    ...CRMLanguages.es,
    ...ContentLanguages.es,
    ...BILanguages.es,
  },
};

export { appLanguages };
