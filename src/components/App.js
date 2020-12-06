import React from 'react';

import { Tab, Tabs } from './Tabs';

const App = () => {
  return (
    <Tabs>
      <Tab title='Tab1'>Content of tab 1</Tab>
      <Tab title='Tab2'>Content of tab 2</Tab>
      <Tab title='Tab3'>Content of tab 3</Tab>
  </Tabs>
  );
}

export default App;
