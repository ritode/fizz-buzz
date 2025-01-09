import React from 'react';
import TabsComponent from '../components/TabsComponent';
import AppBarComponent from '../components/AppBarComponent';

const Page1 = () => {
  const tabLabels = ['Overview', 'Details', 'Settings'];

  const tabContent = [
    <div>Overview Content</div>,
    <div>Details Content</div>,
    <div>Settings Content</div>,
  ];

  return (
  <>
  <AppBarComponent/>
  <TabsComponent tabLabels={tabLabels}>
    {tabContent}
  </TabsComponent>
  </>
  );
};

export default Page1;
