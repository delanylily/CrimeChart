import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CrimService } from './crim.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HateCrimeNyComponent } from './hateCrimeNy/hateCrimeNy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HateCrimeTxComponent } from './hateCrimeTx/hateCrimeTx.component';

@NgModule({
  declarations: [		
    AppComponent,
      HateCrimeNyComponent,
      HateCrimeTxComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [CrimService],
  bootstrap: [AppComponent]
})
export class AppModule { }
