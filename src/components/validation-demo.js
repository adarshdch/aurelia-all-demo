//import {ValidationRules, ValidationMessages, ValidationMessageProvider } from 'aurelia-validation';

import { inject } from 'aurelia-framework';
import { ValidationControllerFactory, ValidationRules, validateTrigger } from 'aurelia-validation';

@inject(ValidationControllerFactory)
export class ValidationDemo {
  

  constructor(controllerFactory)
  {
    this.loginId = '';
    this.uiModel = {
      loginId: '',
      password: '',
      confirmPassword: ''
    }
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.changeOrBlur;

    ValidationRules
      .ensure('loginId').required().minLength(3).withMessage('LoginId must at least be 3 chars long.')  
      .ensure('password').required().minLength(3).withMessage('Password must at least be 3 chars long.')
      .ensure('confirmPassword').required().equals('password').withMessage('Password and confirm password must match.')
      .on(this.uiModel);
    
  }

  activate(params, routeConfig, navigationInstruction) {
    

    
  }

  bind() {
    // ValidationRules
    //   .ensure("loginId").required()
    //   .ensure("password").required({ message: "^My custom error message" })
    //   .on(this.uiModel);
  }



  updatePassword()
  {
    if (this.controller.validate().length <= 0) {
      alert("Validation successful!");
    } else {
      alert("Validation failed!");
    }
    alert(this.uiModel.loginId);
  }
  
}