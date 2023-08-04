import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiOrganizationsComponent } from './components/api-organizations/api-organizations.component';
import { DbOrganizationsComponent } from './components/db-organizations/db-organizations.component';
import { ApiNetworksComponent } from './components/api-networks/api-networks.component';
import { ApiDevicesComponent } from './components/api-devices/api-devices.component';
import { ApiClientsSearchMacComponent } from './components/api-clients-search-mac/api-clients-search-mac.component';
import { DbClientsSearchMacComponent } from './components/db-clients-search-mac/db-clients-search-mac.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiOrganizationsComponent,
    DbOrganizationsComponent,
    ApiNetworksComponent,
    ApiDevicesComponent,
    ApiClientsSearchMacComponent,
    DbClientsSearchMacComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
