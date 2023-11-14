import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private routerURl:Router){

  }
  public gfg = true; 
  public c=true;
  public d=true;
  public e=true;

public skl=true;
  abtfunction(){
    this.routerURl.navigateByUrl('/about')
  }
  title = 'myPortfolio';
}
