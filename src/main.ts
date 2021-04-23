import {Aurelia} from 'aurelia-framework';
import environment from './environment';
import oidcConfig from "./openId_connect_configuration";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.use.plugin("aurelia-open-id-connect", () => oidcConfig);

  aurelia.start().then(() => aurelia.setRoot());
}
