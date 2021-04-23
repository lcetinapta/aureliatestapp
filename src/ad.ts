import { autoinject } from 'aurelia-framework';
import { OpenIdConnect } from "aurelia-open-id-connect";

@autoinject
export class Ad {
  router: any;

  constructor(private openIdConnect: OpenIdConnect) {
    
  }
  

  configureRouter(config, router) {
    config.title = "Super Secret Ad";
    config.options.pushState = true;
    config.map([
      { route: ["", "app1"], name: 'app1', moduleId: "./app1/app1", nav: true, title: "app1" },
    ]);
    this.openIdConnect.configure(config);
    this.router = router;
  }

  activate(params, routeConfig, navigationInstruction) {
    console.log("ad");
  }
}
