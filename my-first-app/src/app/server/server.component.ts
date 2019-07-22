import { Component } from '@angular/core';

// decorator enhances this class. Parameter is a JS Object.
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

// components need to be exported as a class to be used by the rest of the application
export class ServerComponent {
  serverId = 10
  serverStatus = 'offline'

  getServerStatus() {
    return this.serverStatus
  }
}
