import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  count = 0
  serverCreationStatus = `${this.count} server created !`;
  serverName = 'Intial Server'
  serverCreated = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;

    this.count++
    this.serverCreationStatus = `Server created! ${this.count}`
  }

  onUpdateServerName(event:Event) {
    console.log(event)
    this.serverCreated = true;
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
