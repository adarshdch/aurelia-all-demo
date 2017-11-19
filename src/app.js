
export class App {
  constructor() {
    this.message = 'Welcome to Aurelia Demo App';
  }

  configureRouter(config, router) {
    config.title = 'Aurelia';
  
    config.map([
       { route: ['', 'home'],  name: 'home', moduleId: './components/home',  nav: true, title:'Home' },
       { route: ['component'],  name: 'component', moduleId: './components/parent-component',  nav: true, title:'Nested Components' },
       { route: ['event'],  name: 'event', moduleId: './components/event-aggregator',  nav: true, title:'Event Aggregator' },
       { route: ['route'],  name: 'route', moduleId: './components/route-demo',  nav: true, title:'Route Demo' }
    ]);

    this.router = router;
  }
}
