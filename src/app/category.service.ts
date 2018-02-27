import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {OnInit, OnDestroy} from '@angular/core'



@Injectable()
export class CategoryService implements OnDestroy {

  subScription: Subscription;
  results: any;

  constructor() {
    this.subScription = this.productService.getProduct(productId)
    .subscribe(results =>  {
         this.results = results;
    });

   }

  

  ngOnDestroy() {
    this.subScription.unsubscribe();
  }



}
