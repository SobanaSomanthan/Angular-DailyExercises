import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_Task';
  headertitie:string[]=["ABOUT","STYLE PATTERN","MODEL","DETAILS"]
  gallerys=["gallery Image","gallery Image","gallery Image","gallery Image"]

}
