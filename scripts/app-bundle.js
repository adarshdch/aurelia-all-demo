define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let App = exports.App = class App {
    constructor() {
      this.message = 'Welcome to Aurelia Demo App';
    }

    configureRouter(config, router) {
      config.title = 'Aurelia';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: './components/home', nav: true, title: 'Home' }, { route: ['component'], name: 'component', moduleId: './components/parent-component', nav: true, title: 'Nested Components' }, { route: ['event'], name: 'event', moduleId: './components/event-aggregator', nav: true, title: 'Event Aggregator' }, { route: ['route'], name: 'route', moduleId: './components/route-demo', nav: true, title: 'Route Demo' }, { route: ['validation'], name: 'validation', moduleId: './components/validation-demo', nav: true, title: 'Validation Demo' }]);

      this.router = router;
    }
  };
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
    aurelia.use.standardConfiguration().feature('resources').plugin("aurelia-validation").plugin("aurelia-validatejs");

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
  let ChildComponent = exports.ChildComponent = class ChildComponent {
    constructor() {
      this.message = 'I am child component message';
    }

  };
});
define('components/event-aggregator',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let EventAggregator = exports.EventAggregator = class EventAggregator {};
});
define('components/home',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let Home = exports.Home = class Home {};
});
define('components/nav-menu',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let NavMenu = exports.NavMenu = class NavMenu {
    constructor() {
      this.message = 'Menu Items';
    }

  };
});
define('components/parent-component',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let ParentComponent = exports.ParentComponent = class ParentComponent {
    constructor() {
      this.message = 'I am parent component message';
    }
  };
});
define('components/route-demo',['exports', 'aurelia-router', 'aurelia-framework'], function (exports, _aureliaRouter, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RouteDemo = undefined;
  let RouteDemo = exports.RouteDemo = class RouteDemo {

    activate(params, routeConfig, navigationInstruction) {
      this.parentRouter = navigationInstruction.router;
      this.parentRouterNavigation = this.parentRouter.navigation.slice();
    }

    goToEvent($event) {
      console.log('Navigating to event demo page...');
      // //this.router.reset();
      // this.router.refreshNavigation();

      this.parentRouter.navigate('event');
    }

    configureRouter(config, router) {
      config.map([{ route: '', moduleId: './child-component', nav: true, title: 'Child Component' }, { route: 'home', name: 'home', moduleId: './home', nav: true, title: 'Home Page' }]);
      this.router = router;
    }

    hideComponentParentMenu() {
      this.parentRouter.navigation = this.parentRouterNavigation.filter(function (x) {
        return x.config.name !== 'component';
      });
      this.parentRouter.refreshNavigation();
    }

    showComponentParentMenu() {
      this.parentRouter.navigation = this.parentRouterNavigation.slice();
      this.parentRouter.refreshNavigation();
    }

    detached() {}

  };
});
define('components/validation-demo',['exports', 'aurelia-framework', 'aurelia-validation'], function (exports, _aureliaFramework, _aureliaValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationDemo = undefined;

  var _dec, _class;

  let ValidationDemo = exports.ValidationDemo = (_dec = (0, _aureliaFramework.inject)(_aureliaValidation.ValidationControllerFactory), _dec(_class = class ValidationDemo {

    constructor(controllerFactory) {
      this.loginId = '';
      this.uiModel = {
        loginId: '',
        password: '',
        confirmPassword: ''
      };
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.validateTrigger = _aureliaValidation.validateTrigger.changeOrBlur;

      _aureliaValidation.ValidationRules.ensure('loginId').required().minLength(3).withMessage('LoginId must at least be 3 chars long.').ensure('password').required().minLength(3).withMessage('Password must at least be 3 chars long.').ensure('confirmPassword').required().equals('password').withMessage('Password and confirm password must match.').on(this.uiModel);
    }

    activate(params, routeConfig, navigationInstruction) {}

    bind() {
      // ValidationRules
      //   .ensure("loginId").required()
      //   .ensure("password").required({ message: "^My custom error message" })
      //   .on(this.uiModel);
    }

    updatePassword() {
      if (this.controller.validate().length <= 0) {
        alert("Validation successful!");
      } else {
        alert("Validation failed!");
      }
      alert(this.uiModel.loginId);
    }

  }) || _class);
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./components/nav-menu.html\"></require><div><h1 style=\"text-align:center\">${message}</h1></div><div class=\"row\" style=\"border:1px solid red\"><div class=\"col-md-3\" style=\"border:1px solid #00f\"><nav-menu router.bind=\"router\"></nav-menu></div><div class=\"col-md-9\" style=\"border:1px solid #00f\"><router-view></router-view></div></div></template>"; });
define('text!components/child-component.html', ['module'], function(module) { module.exports = "<template><h2>I am from child component</h2><p>${message}</p></template>"; });
define('text!components/event-aggregator.html', ['module'], function(module) { module.exports = "<template>Event Aggregator</template>"; });
define('text!components/home.html', ['module'], function(module) { module.exports = "<template><p style=\"text-align:left\">Please select action for left menu...</p></template>"; });
define('text!components/nav-menu.html', ['module'], function(module) { module.exports = "<template bindable=\"router\"><h4>Menu Items</h4><ul><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></template>"; });
define('text!components/parent-component.html', ['module'], function(module) { module.exports = "<template><require from=\"./child-component\"></require><h1>I am parent component</h1><p>${message}</p><child-component></child-component></template>>"; });
define('text!components/route-demo.html', ['module'], function(module) { module.exports = "<template><require from=\"./nav-menu.html\"></require><h3>Route Demo</h3><nav-menu router.bind=\"router\"></nav-menu><button click.delegate=\"goToEvent($event)\">Go To Event Aggregator</button> <button click.delegate=\"hideComponentParentMenu($event)\">Hide Component Parent Menu</button> <button click.delegate=\"showComponentParentMenu($event)\">Show Component Parent Menu</button><router-view></router-view></template>"; });
define('text!components/validation-demo.html', ['module'], function(module) { module.exports = "<template><h2>Change Password - Validation Demo</h2><form submit.delegate=\"updatePassword()\"><ul><li repeat.for=\"error of controller.errors\">${error.message}</li></ul><div class=\"form-group\"><label class=\"control-label\" for=\"loginId\">Login Id</label><input type=\"text\" class=\"form-control\" id=\"loginId\" placeholder=\"Login Id\" value.bind=\"uiModel.loginId & validate\"></div><div class=\"form-group\"><label class=\"control-label\" for=\"password\">Password</label><input type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Password\" value.bind=\"uiModel.password & validate\"></div><div class=\"form-group\"><label class=\"control-label\" for=\"confirmPassword\">Confirm Password</label><input type=\"email\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm Password\" value.bind=\"uiModel.confirmPassword & validate\"></div><div validation-errors.bind=\"errors\"><ul if.bind=\"controller.errors\"><li repeat.for=\"error of controller.errors\"> ${error.message} </li></ul></div><button type=\"submit\" class=\"btn btn-primary\">Change Password</button></form></template>"; });
//# sourceMappingURL=app-bundle.js.map