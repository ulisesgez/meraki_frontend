import { Component } from '@angular/core';
import { ApiClientsSearchMacService, Client } from 'src/app/services/api-clients-search-mac.service';

@Component({
  selector: 'app-api-clients-search-mac',
  templateUrl: './api-clients-search-mac.component.html',
  styleUrls: ['./api-clients-search-mac.component.css']
})
export class ApiClientsSearchMacComponent {
  clientes: Client[] = [];
  error: string | object | null = null;
  isLoading: boolean = false;

  constructor(private ApiClientsSearchMacService: ApiClientsSearchMacService) {}

  buscarClientes(macId: string) {
    this.clientes = [];
    this.error = null;
    this.isLoading = true; // Mostrar el indicador de carga

    if (!macId) {
      this.error = 'Error: Ingresa un Mac ID válido.';
      this.isLoading = false; // Ocultar el indicador de carga
      return;
    }

    this.ApiClientsSearchMacService.buscarClientes(macId.trim().toLowerCase()).subscribe(
      (data: any) => {
        if (data.records && data.records.length > 0) {
          // Agregar mac, manufacturer y clientId a cada objeto en data.records
          this.clientes = data.records.map((cliente: any) => {
            // Convertir firstSeen y lastSeen a fechas legibles
            const firstSeenDate = new Date(cliente.firstSeen * 1000);
            const lastSeenDate = new Date(cliente.lastSeen * 1000);
            return {
              mac: data.mac,
              manufacturer: data.manufacturer,
              clientId: data.clientId,
              ...cliente,
              firstSeen: firstSeenDate,
              lastSeen: lastSeenDate,
            };
          });
        } else {
          this.error = 'Error: La respuesta no contiene datos de clientes.';
        }
        this.isLoading = false; // Ocultar el indicador de carga cuando finaliza la búsqueda
        console.log(JSON.stringify(this.clientes, null, 2)); // Imprimir la data en formato JSON
      },
      (error) => {
        this.error = 'Error general: ' + error.error.message;
        this.isLoading = false; // Ocultar el indicador de carga en caso de error
      }
    );
  }

  guardarClientesEnBD() {
    this.ApiClientsSearchMacService.guardarClientes(this.clientes).subscribe(
      (response) => {
        console.log(response.message);
        // Agregar aquí la lógica para mostrar un mensaje de éxito en el frontend si lo deseas
      },
      (error) => {
        console.error('Error al guardar los clientes en la base de datos:', error);
        // Agregar aquí la lógica para mostrar un mensaje de error en el frontend si lo deseas
      }
    );
  }
}