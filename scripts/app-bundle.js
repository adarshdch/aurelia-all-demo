define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class App {
    constructor() {
      this.message = 'Welcome to Aurelia Demo App';
    }

    configureRouter(config, router) {
      config.title = 'Aurelia';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: './components/home', nav: true, title: 'Home' }, { route: ['component'], name: 'component', moduleId: './components/parent-component', nav: true, title: 'Nested Components' }, { route: ['event'], name: 'event', moduleId: './components/event-aggregator', nav: true, title: 'Event Aggregator' }, { route: ['route'], name: 'route', moduleId: './components/route-demo', nav: true, title: 'Route Demo' }]);

      this.router = router;
    }
  }
  exports.App = App;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('components/child-component',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class ChildComponent {
    constructor() {
      this.message = 'I am child component message';
    }

  }
  exports.ChildComponent = ChildComponent;
});
define('components/home',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class Home {}
  exports.Home = Home;
});
define('components/parent-component',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class ParentComponent {
    constructor() {
      this.message = 'I am parent component message';
    }
  }
  exports.ParentComponent = ParentComponent;
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('components/event-aggregator',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class EventAggregator {}
  exports.EventAggregator = EventAggregator;
});
define('components/route-demo',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class RouteDemo {}
  exports.RouteDemo = RouteDemo;
});
define('components/nav-menu',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class NavMenu {}
  exports.NavMenu = NavMenu;
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./components/nav-menu.html\"></require><div><h1 style=\"text-align:center\">${message}</h1></div><div class=\"row\" style=\"border:1px solid red\"><div class=\"col-md-3\" style=\"border:1px solid #00f\"><nav-menu router.bind=\"router\"></nav-menu></div><div class=\"col-md-9\" style=\"border:1px solid #00f\"><router-view></router-view></div></div></template>"; });
define('text!components/child-component.html', ['module'], function(module) { module.exports = "<template><h2>I am from child component</h2><p>${message}</p></template>"; });
define('text!components/home.html', ['module'], function(module) { module.exports = "<template><p style=\"text-align:left\">Please select action for left menu...</p></template>"; });
define('text!components/parent-component.html', ['module'], function(module) { module.exports = "<template><require from=\"./child-component\"></require><h1>I am parent component</h1><p>${message}</p><child-component></child-component></template>>"; });
define('text!components/event-aggregator.html', ['module'], function(module) { module.exports = "<template>Event Aggregator</template>"; });
define('text!components/route-demo.html', ['module'], function(module) { module.exports = "<template>Route Demo</template>"; });
define('text!components/nav-menu.html', ['module'], function(module) { module.exports = "<template bindable=\"router\"><h4>Menu Items</h4><ul><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></template>"; });
//# sourceMappingURL=app-bundle.js.map