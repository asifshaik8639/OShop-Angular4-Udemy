import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return true;
  }

}
