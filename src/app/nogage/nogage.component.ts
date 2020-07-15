import { Component } from '@angular/core';

@Component({
  selector: 'app-nogage',
  templateUrl: './nogage.component.html',
  styleUrls: ['./nopage.component.css']
})
export class NogageComponent{

  year = new Date().getFullYear();

}
