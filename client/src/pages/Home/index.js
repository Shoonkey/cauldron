import React from 'react';

import Page from '../../core/Page';
import MapSelector from '../../core/MapSelector';
import Chat from '../../Chat';
import Canvas from '../../Canvas';

function Home() {
  return (
    <Page>
      <MapSelector />
      <Chat />
      <Canvas />
    </Page>
  );
}

export default Home;