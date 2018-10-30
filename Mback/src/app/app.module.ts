import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }        from './app.component';
import { IndicateurComponent } from './indicateur/indicateur.component';
import { BackUpComponent }     from './indicateur/back-up/back-up.component';
import { CrontaskComponent }   from './indicateur/crontask/crontask.component';

import { AppService }          from './app.service';
import { GroupsComponent }     from './groups/groups.component';

const routes: Routes = [
    { path: 'index', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: GroupsComponent},
    { path: 'cron', component: CrontaskComponent},
    { path: 'back', component: BackUpComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    IndicateurComponent,
    BackUpComponent,
    CrontaskComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
