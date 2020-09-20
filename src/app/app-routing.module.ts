import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HateCrimeTxComponent } from './hateCrimeTx/hateCrimeTx.component';
import { CrimeResolverService } from './crimeResolver.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'crimestats', component: HateCrimeTxComponent, resolve: { crimestats: CrimeResolverService} }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
