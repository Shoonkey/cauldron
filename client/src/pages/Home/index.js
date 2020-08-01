import React from 'react';

import Page from '../../core/Page';
import MapSelector from '../../core/MapSelector';
import Chat from '../../Chat';

function Home() {
  return (
    <Page>
      <MapSelector />
      <Chat />
    </Page>
  );
}

export default Home;