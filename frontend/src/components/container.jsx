import Navigation from '.components/navigation'
import React from 'react';

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

export default Container;
