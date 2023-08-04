import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Network {
  id: number;
  organizationId: number;
}

@Component({
  selector: 'app-api-networks',
  templateUrl: './api-networks.component.html',
  styleUrls: ['./api-networks.component.css']
})
export class ApiNetworksComponent implements OnInit {
  redes: Network[] = [];
  error: string | null = null;

  constructor(private http: HttpClient) {} // Inyectar HttpClient en el constructor

  ngOnInit() {
    const orgId = '1002375'; // Reemplaza esto con el ID de la organización deseada
    this.getRedes(orgId);
  }

  getRedes(orgId: string) {
    this.http.get<Network[]>(`http://localhost:3000/api/organizations/${orgId}/networks`)
      .subscribe(
        (data: Network[]) => {
          this.redes = data;
        },
        (error) => {
          this.error = 'Error al obtener las redes: ' + error.message;
        }
      );
  }
}