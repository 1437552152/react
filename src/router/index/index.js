import { Route } from 'react-router-dom';
import React from 'react';
import One from '../../pages/index/one';
import Two from '../../pages/index/two';
const match = '';
const index = () => {
    return (
      <div>
        <Route exact path={`${match}/one`} component={One} />
        <Route exact path={`${match}/two`} component={Two} />
      </div>
    );
  };
  
  export default index;