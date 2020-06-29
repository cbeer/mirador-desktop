import React from 'react';
import Home from '../components/Home';
import AppProviders from 'mirador/dist/es/src/containers/AppProviders';
import PluginProvider from 'mirador/dist/es/src/extend/PluginProvider';
import Window from 'mirador/dist/es/src/containers/Window';

const plugins = [
  {
    target: 'WindowTopBar',
    mode: 'wrap',
    component: ({ TargetComponent, targetProps: { classes, ...otherProps } }) => {
      return <TargetComponent {...otherProps} classes={{ ...classes, focused: '' }} />;
    }
  },

]

export default function HomePage() {
  return (
    <PluginProvider plugins={plugins}>
      <AppProviders>
        <Window windowId="main"/>
      </AppProviders>
    </PluginProvider>
  );
}
