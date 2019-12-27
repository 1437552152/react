import { Route } from 'react-router-dom';
import React from 'react';
import Three from '../../pages/index/three';
const match = '';
const index = () => {
    return (
      <div>
        <Route exact path={`${match}/three`} component={Three} />
      </div>
    );
  };
  export default index;