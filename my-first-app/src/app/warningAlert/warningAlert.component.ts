import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warningAlert.component.html',
  styleUrls: ['./warningAlert.component.css'],
})
export class WarningAlert implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  message = 'test'

}
