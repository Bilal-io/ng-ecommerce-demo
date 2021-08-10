import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  userMenuOpen = false;
  isUserAuthenticated: boolean;
  quantity: number;
  documentClickListener

  constructor(
    private auth: AuthenticationService,
    public cart: CartService
  ) {
  }

  ngOnInit(): void {
    // Check if the user is authenticated
    this.auth.loggedUser.subscribe(user => {
      this.isUserAuthenticated = !!user;
    });

  }

  // Logout the user
  logout(): void {
    this.auth.logout();
  }

}
