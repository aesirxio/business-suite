/*
 * @copyright   Copyright (C) 2023 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';
import { mainMenu } from 'routes/menu';
import { Menu } from 'aesirx-uikit';
//import { useTranslation } from 'react-i18next';

const SbarLeft = () => {
  // const { t } = useTranslation();

  return (
    <>
      <Menu dataMenu={mainMenu} />
      {/*
      <div className="border-top border-dark-blue">
        <Menu dataMenu={menuSetup} title={t('txt_set_up')} />
      </div> */}
    </>
  );
};

export default SbarLeft;
