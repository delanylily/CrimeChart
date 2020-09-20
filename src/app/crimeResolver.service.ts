import { Injectable } from '@angular/core';
import { CrimService } from './crim.service';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrimeResolverService implements Resolve<any> {

constructor(private crimService: CrimService) { }
//this will subsscribe automatically to the observable and provide the router with the fetched data
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return this.crimService.hateCrimeTx().pipe( catchError((error) => {
    return empty();
  })
  );
}

}
