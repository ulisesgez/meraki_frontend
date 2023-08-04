import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Organization {
  id: number;
  name: string;
}

@Component({
  selector: 'app-api-organizations',
  templateUrl: './api-organizations.component.html',
  styleUrls: ['./api-organizations.component.css']
})
export class ApiOrganizationsComponent implements OnInit {
  organizaciones: Organization[] = [];
  error: string | null = null;

  constructor(private http: HttpClient) {} // Inyectar HttpClient en el constructor

  ngOnInit() {
    this.getOrganizaciones();
  }

  getOrganizaciones() {
    this.http.get<Organization[]>('http://localhost:3000/api/organizations')
      .subscribe(
        data => {
          this.organizaciones = data;
        },
        error => {
          this.error = 'Error al obtener las organizaciones: ' + error.message;
        }
      );
  }
}