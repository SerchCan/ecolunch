// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
// plugins
import AvailableTuppersPlugin from './plugins/AvailableTuppersPlugin';
// comps
import root from './root.js';

export default () => {
  const app = new App(root);
  if(__NODE__){
    app.register(AvailableTuppersPlugin);
  }
  app.register(Styletron);
  app.register(Router);
  app.register(HelmetPlugin)
  return app;
};
