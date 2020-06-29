import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { history, configuredStore } from './store';
import './app.global.css';

const store = configuredStore();
store.dispatch({
  type: 'mirador/IMPORT_CONFIG',
  config: {
    id: 'mirador',
    catalog: [],
    window: {
      allowClose: false,
      allowMaximize: false,
      sideBarOpen: true,
      sideBarOpenByDefault: true,
      defaultSideBarPanel: 'info',
      allowWindowSideBar: false,
    },
    windows: [{
     id: 'main',
     manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
     canvasId: 'https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174892',
     thumbnailNavigationPosition: 'far-bottom',
   }],
 },
});

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
);
