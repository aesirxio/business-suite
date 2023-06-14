/*
 * @copyright   Copyright (C) 2023 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React, { Suspense } from 'react';
import { BiStoreProvider, BiViewModel, integrationRoutes } from 'aesirx-bi-app';
import { Spinner } from 'aesirx-uikit';
import { Route } from 'react-router-dom';

const biViewModel = new BiViewModel();

const a = integrationRoutes();

const BIPage = () => {
  return (
    <BiStoreProvider viewModel={biViewModel}>
      <Suspense fallback={<Spinner />}>
        {a.map(({ path, exact, main }: any, i: any) => (
          <Route key={i} exact={exact} path={path} component={main} />
        ))}
      </Suspense>
    </BiStoreProvider>
  );
};

export default BIPage;
