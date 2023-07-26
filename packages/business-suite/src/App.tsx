import React from 'react';

import 'aesirx-uikit/dist/index.css';

import { AppProvider, Menu, isLogin } from 'aesirx-uikit';
import { appLanguages } from './translations';
import { authRoutes, mainRoutes, settingRoutes } from './routes';
import { profileMenu, settingMenu } from './routes/menu';
import SbarLeft from 'components/SbarLeft';
import { AesirXDamStorage } from 'aesirx-dam-app';

import './style.scss';
import 'aesirx-dam-app/dist/index.css';

function App() {
  return (
    <AppProvider
      appLanguages={appLanguages}
      authRoutes={authRoutes}
      mainRoutes={mainRoutes}
      settingRoutes={settingRoutes}
      profileMenu={profileMenu}
      isLogin={isLogin}
      leftMenu={<SbarLeft />}
      settingMenu={<Menu dataMenu={settingMenu} />}
      componentBottomMenu={<AesirXDamStorage />}
    />
  );
}

export default App;
