import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName = ''
  allowNewUser = false
  userCreationStatus = 'No user was created'
  serverName = ''
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
   }

  ngOnInit() {
  }

  allowUserAdding(event) {
    if (event.target.value !== '') {
      this.allowNewUser = true
    } else {
      this.allowNewUser = false
    }
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'server ' + this.serverName + ' was created!'
  }

  onCreateUser() {
    this.userCreationStatus = 'user ' + this.userName + ' was created!'
    this.userName = ''
  }

  onUpdateServerName(event) {
    // this method is only needed in 1-way data binding
    this.serverName = event.target.value
  }

}
