import { autoinject, Aurelia } from 'aurelia-framework';
import { OpenIdConnect } from 'aurelia-open-id-connect';
import { AuthService } from "AuthService";
import {User} from 'oidc-client';
import {Router} from "aurelia-router";
import {Container} from "aurelia-framework";

@autoinject
export class Landing {


    user: User;
    constructor (private openIdConnect: OpenIdConnect, private aurelia:Aurelia, private router:Router, private container:Container)
    {
    }

    async activate (params, routeConfig, navigationInstruction)
    {
        await this.openIdConnect.observeUser((user: User) =>
        {
            if (user)
            {
                this.user = user;
                console.log("User: " + user);
                this.container.registerSingleton(User, () => user);
                this.router.navigate('/', { replace: true, trigger: false });
                this.aurelia.setRoot("./ad");                
            }
        });
    }

  async login() {
    await this.openIdConnect.userManager.signinRedirect();
  }
}
