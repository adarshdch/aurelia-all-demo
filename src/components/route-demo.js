import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

export class RouteDemo {

  activate(params, routeConfig, navigationInstruction) {
    this.parentRouter = navigationInstruction.router;
    this.parentRouterNavigation = this.parentRouter.navigation.slice();
    
    
  }

  goToEvent($event)
  {
    console.log('Navigating to event demo page...');
    // //this.router.reset();
    // this.router.refreshNavigation();
    
    this.parentRouter.navigate('event');
  }

  configureRouter(config, router) {
    config.map([
        { route: '', moduleId: './child-component', nav: true, title: 'Child Component' },
        { route: 'home', name: 'home', moduleId: './home', nav: true, title: 'Home Page' }
    ]);
    this.router = router;
  }

  hideComponentParentMenu()
  {
    this.parentRouter.navigation = this.parentRouterNavigation.filter(function(x){ return x.config.name !== 'component'});
    this.parentRouter.refreshNavigation();
  }

  showComponentParentMenu()
  {
    this.parentRouter.navigation = this.parentRouterNavigation.slice();
    this.parentRouter.refreshNavigation();
  }

  detached() {
    
  }

}