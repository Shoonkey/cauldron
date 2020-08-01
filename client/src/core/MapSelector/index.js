import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Button from '../Button';
import Icon from '../Icon';
import { Container } from './styles';

function MapSelector({ onChange }) {

  const [open, setOpen] = useState(false);
  const [maps, setMaps] = useState(null);

  useEffect(() => {
    // TODO: Retrieve maps from back-end
    setMaps([]);
  }, []);

  let content;

  if (maps == null)
    content = <p className="loading-text">Loading...</p>;
  else if (maps.length === 0)
    content = (
      <Button className="add-map-btn" onClick={() => {}}>
        <Icon name="add" size="large" /> Add new map
      </Button>
    );
  else
    content = maps.map(
      map => <Button theme="none" className="map" onClick={() => onChange(map)} />
    );

  return (
    <Container className={clsx("map-selector", open && "open")}>
      <Button theme="none" className="toggle-btn" onClick={() => setOpen(!open)}>
        <Icon name="chevron-down-outline" /> 
      </Button>
      <div className="map-container">{content}</div>
    </Container>
  );
}

export default MapSelector;