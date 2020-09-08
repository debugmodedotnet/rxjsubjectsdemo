import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataserviceService {

  counter = 1 ; 
  count = {
    coutner : this.counter
  }
  constructor() {

   }

   updateCount(){
     
   }
}
