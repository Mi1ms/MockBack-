import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }        from './app.component';
import { IndicateurComponent } from './indicateur/indicateur.component';
import { BackUpComponent }     from './indicateur/back-up/back-up.component';
import { CrontaskComponent }   from './indicateur/crontask/crontask.component';

import { AppService }          from './app.service';
import { MockbackService }     from './indicateur/mockback.service';
import { InMemoryDbService, HttpClientInMemoryWebApiModule }   from "angular-in-memory-web-api";


const routes: Routes = [
    { path: 'menu', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: IndicateurComponent},
    { path: 'backup', component: BackUpComponent},
    { path: 'crontask', component: CrontaskComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndicateurComponent,
    BackUpComponent,
    CrontaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(MockbackService),
  ],
  providers: [
    // hooking up Injection
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
