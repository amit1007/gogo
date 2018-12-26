import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
	selector: 'app-left-sidebar',
	templateUrl: './left-sidebar.component.html',
	styleUrls: ['./left-sidebar.component.css']

})
export class LeftSidebarComponent implements OnInit {
	

	constructor(private authenticationService : AuthenticationService,private route:ActivatedRoute,private router:Router) { }

	ngOnInit() {
		
	}


	LogOut(){
	// reset login status
	console.log('in logout function');
    this.authenticationService.logout();
  }
}
