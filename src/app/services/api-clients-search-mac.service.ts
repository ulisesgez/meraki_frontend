import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  mac: string;
  manufacturer: string | null;
  clientId: string;
  status: string;
  recentDeviceMac: string;
  ssid: string;
  description: string;
  os: string | null;
  ip: string;
  ip6: string;
  firstSeen: Date;
  lastSeen: Date;
  vlan: string;
  wirelessCapabilities: string;
  smInstalled: boolean;
  network: {
    id: string;
    organizationId: string;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiClientsSearchMacService {

  constructor(private http: HttpClient) {}

  buscarClientes(macId: string): Observable<any> { // Usar Observable<any>
    const orgId = '1002375'; // Reemplaza esto con el ID de la organización deseada
    return this.http.get<any>(`http://localhost:3000/api/organizations/${orgId}/clients/search?mac=${macId}&perPage=5&timespan=2678400`);
  }

  guardarClientes(clientes: Client[]): Observable<any> { // Usar Observable<any>
    return this.http.post<any>('http://localhost:3000/db/saveClients', clientes);
  }
}