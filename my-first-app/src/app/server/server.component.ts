import { Component } from '@angular/core';

// decorator enhances this class. Parameter is a JS Object.
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})

// components need to be exported as a class to be used by the rest of the application
export class ServerComponent {
  serverId = 10
  serverStatus = 'offline'

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
