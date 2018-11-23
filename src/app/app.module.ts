import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }        from './app.component';
import { IndicateurComponent } from './indicateur/indicateur.component';

import { AppService }          from './app.service';
import { GroupsComponent }     from './groups/groups.component';
import { DetailsComponent } from './indicateur/details/details.component';

const routes: Routes = [
    { path: 'index', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: GroupsComponent},
    { path: ':id/indicators', component: IndicateurComponent, pathMatch: 'full'},
    { path: ':id/indicators/:typ', component: DetailsComponent, pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    IndicateurComponent,
    GroupsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
