import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiOrganizationsComponent } from './components/api-organizations/api-organizations.component';
import { ApiNetworksComponent } from './components/api-networks/api-networks.component';
import { ApiDevicesComponent } from './components/api-devices/api-devices.component';
import { ApiClientsSearchMacComponent } from './components/api-clients-search-mac/api-clients-search-mac.component';
import { DbOrganizationsComponent } from './components/db-organizations/db-organizations.component';
import { DbClientsSearchMacComponent } from './components/db-clients-search-mac/db-clients-search-mac.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-organizations', component: ApiOrganizationsComponent },
  { path: 'api-networks', component: ApiNetworksComponent },
  { path: 'api-devices', component: ApiDevicesComponent },
  { path: 'api-clients-search-mac', component: ApiClientsSearchMacComponent },
  { path: 'db-organizations', component: DbOrganizationsComponent },
  { path: 'db-clients-search-mac', component: DbClientsSearchMacComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
