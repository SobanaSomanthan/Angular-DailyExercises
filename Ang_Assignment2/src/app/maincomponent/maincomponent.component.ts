import { Component } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {
  tittles =[
    {title:"collection",content:"Set design is the creation of the physical space in which the action of a performed event takes place."},
    {title:"pattern",content:"Patterns are simply a repetition of more than one design element working in concert with each other"}
    
  ];

  headertitie:string[]=["ABOUT","STYLE PATTERN","MODEL","DETAILS"]
}
