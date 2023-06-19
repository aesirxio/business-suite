/*
 * @copyright   Copyright (C) 2023 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React, { Suspense } from 'react';
import { BiStoreProvider, BiViewModel, integrationRoutes, DataStream } from 'aesirx-bi-app';
import { Spinner } from 'aesirx-uikit';
import { Route } from 'react-router-dom';

const biViewModel = new BiViewModel();
const biRoutes = integrationRoutes();

const BIPage = () => {
  return (
    <BiStoreProvider viewModel={biViewModel}>
      <div className="d-flex justify-content-start flex-1 align-items-center p-2 ">
        <DataStream />
      </div>
      <div className="position-relative">
        <Suspense fallback={<Spinner />}>
          {biRoutes.map(({ path, exact, main }: any, i: any) => (
            <Route key={i} exact={exact} path={path} component={main} />
          ))}
        </Suspense>
      </div>
    </BiStoreProvider>
  );
};

export default BIPage;
