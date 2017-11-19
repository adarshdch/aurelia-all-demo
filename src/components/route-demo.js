import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

export class RouteDemo {

  activate(params, routeConfig, navigationInstruction) {
    this.router = navigationInstruction.router;
  }

  goToEvent($event)
  {
    console.log('Navigating to event demo page...');
    this.router.routes.forEach(element => {
      element.nav = false;
    });
    //this.router.reset();
    this.router.refreshNavigation();
    this.router.navigate('event');
  }

}