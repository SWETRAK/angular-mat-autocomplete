import { Component } from '@angular/core';
import {TestInterface} from "./interfaces/test-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:TestInterface = {name: "initInterface", id: 0, grades: []}
}
