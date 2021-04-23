import { autoinject } from 'aurelia-framework';
import { OpenIdConnect } from "aurelia-open-id-connect";

@autoinject
export class App {
  public message: string = 'Hello World!';
  router: any;

  constructor(private openIdConnect: OpenIdConnect) {
    
  }
  
  configureRouter(config, router) {
    config.title = "Super Secret Project";
    config.options.pushState = true;
    config.map([
      { route: ["", "landing"], name: 'landing', moduleId: "./landing/landing", nav: true, title: "Landing" },
    ]);

    this.openIdConnect.configure(config);
    this.router = router;
  }
}
