import React from 'react';

import Page from '../../components/Page';
import Chat from '../../components/Chat';
import MapSelector from '../../components/MapSelector';

function Home() {
  return (
    <Page>
      <MapSelector />
      <Chat />
    </Page>
  );
}

export default Home;