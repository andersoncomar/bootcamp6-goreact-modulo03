import React, { Fragment } from 'react';

import Map from '../../components/Map';
import SuspendedBar from '../../components/SuspendedBar';
import AddUser from '../../components/AddUser';

const Main = () => (
  <Fragment>
    <Map />
    <SuspendedBar />
    <AddUser />
  </Fragment>
);

export default Main;
