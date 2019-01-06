import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
    serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

    onServerAdded(serverData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.serverName,
            content: blueprintData.serverContent
        });
    }
  constructor() { }

  ngOnInit() {
  }

}
