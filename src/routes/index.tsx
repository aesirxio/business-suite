/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';

import {
  LoginPage,
  ProfilePage,
  DigitalAssetsPage,
  MembersPage,
  EditMemberProvider,
} from 'aesirx-uikit';
import Comingsoon from 'pages/Comingsoon';

import { integrationRoutes as DMARoutes } from 'aesirx-dma-app';
import { integrationRoutes as PIMRoutes } from 'aesirx-pim-app';
import { Redirect } from 'react-router-dom';

const authRoutes = [
  {
    path: '/login',
    exact: true,
    main: () => <LoginPage text="Business Suite" />,
  },
];

const mainRoutes = [
  {
    path: ['/'],
    exact: true,
    main: () => <Redirect to="/pim" />,
  },
  {
    path: ['/erp'],
    exact: true,
    main: () => <Comingsoon />,
  },
  {
    path: ['/crm'],
    exact: true,
    main: () => <Comingsoon />,
  },
  {
    path: ['/content'],
    exact: true,
    main: () => <Comingsoon />,
  },
  {
    path: ['/bi'],
    exact: true,
    main: () => <Comingsoon />,
  },
  {
    path: ['/dam'],
    exact: true,
    main: () => <DigitalAssetsPage />,
  },

  {
    path: '/members',
    exact: true,
    main: () => <MembersPage />,
  },
  {
    path: ['/members/edit/:id'],
    exact: true,
    main: ({ match }: any) => <EditMemberProvider match={match} />,
  },
  {
    path: ['/members/add'],
    exact: true,
    main: () => <EditMemberProvider />,
  },
];

const settingRoutes = [
  {
    path: '/profile',
    exact: false,
    main: () => <ProfilePage />,
  },
];

const fullRoutes = [...mainRoutes, ...DMARoutes(), ...PIMRoutes()];

export { authRoutes, fullRoutes as mainRoutes, settingRoutes };
