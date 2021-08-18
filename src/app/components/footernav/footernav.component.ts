import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faHome, faShoppingCart, faClipboard, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footernav',
  templateUrl: './footernav.component.html',
  styleUrls: ['./footernav.component.css']
})
export class FooternavComponent implements OnInit {

  @Output() onVerDashboard = new EventEmitter(); 
  @Output() onVerAtras = new EventEmitter(); 
  
  faCaretLeft = faCaretLeft;
  faHome = faHome;
  // faShopping = faShoppingCart;
  faClipboard = faClipboard;
  
  constructor() { }

  ngOnInit(): void {
  }

  verDashboard(){
    this.onVerDashboard.emit('dashboard');
  }

  verAtras(){
    this.onVerAtras.emit();
  }

}
