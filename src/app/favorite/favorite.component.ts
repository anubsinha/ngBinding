import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  faStar = faStar;
  isActive = true;
  title: string="";
  toggle(){
    this.isActive = !this.isActive; 
    
  }

  constructor() { }

  ngOnInit() {
  }

}
