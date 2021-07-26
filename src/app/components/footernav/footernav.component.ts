import { Component, OnInit } from '@angular/core';
import { faHome, faShoppingCart, faClipboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footernav',
  templateUrl: './footernav.component.html',
  styleUrls: ['./footernav.component.css']
})
export class FooternavComponent implements OnInit {

  faHome = faHome;
  faShopping = faShoppingCart;
  faClipboard = faClipboard;
  
  constructor() { }

  ngOnInit(): void {
  }

}
