import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Device {
  name: string;
  serial: string;
  mac: string;
  networkId: string;
  productType: string;
  model: string;
  url: string;
}

@Component({
  selector: 'app-api-devices',
  templateUrl: './api-devices.component.html',
  styleUrls: ['./api-devices.component.css']
})
export class ApiDevicesComponent implements OnInit {
  dispositivos: Device[] = [];
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const orgId = '1002375';
    this.getDispositivos(orgId);
  }

  getDispositivos(orgId: string) {
    this.http.get<Device[]>(`http://localhost:3000/api/organizations/${orgId}/allDevices`)
      .subscribe(
        (data: Device[]) => {
          this.dispositivos = data;
        },
        (error) => {
          this.error = 'Error al obtener los dispositivos: ' + error.message;
        }
      );
  }
}