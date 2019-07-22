import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  allowNewUser = false
  serverCreationStatus = 'No server was created'
  userCreationStatus = 'No user was created'
  serverName = 'DEFAULT'
  userName = ''

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
    this.serverCreationStatus = 'server ' + this.serverName + ' was created!'
  }

  onCreateUser() {
    this.userCreationStatus = 'user ' + this.userName + ' was created!'
    this.userName = ''
    this.allowNewUser = false
  }

  onUpdateServerName(event) {
    // this method is only needed in 1-way data binding
    this.serverName = event.target.value
  }

}
