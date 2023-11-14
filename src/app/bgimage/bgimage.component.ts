import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-bgimage',
  templateUrl: './bgimage.component.html',
  styleUrls: ['./bgimage.component.css']
})
export class BgimageComponent implements OnInit {
  showContent=false
  

ngOnInit()
        {
            this.makeShowContentTrue();
            setInterval(() => {
                this.makeShowContentTrue(); 
                }, 2000);
        }

  makeShowContentTrue() {
    this.showContent=!this.showContent
  }
  
}


