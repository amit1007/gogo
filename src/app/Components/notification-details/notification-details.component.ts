import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {

	constructor(private toastr: ToastrService,private router:Router) { }

	ngOnInit() {
	}

	acceptBid(){
		// this.toastr.success('Thank You', 'All the Best!');
		this.router.navigate(['/accept-bid-details']);
	}

	cancelBid(){
		console.log('cancel bid');
		this.toastr.info('You canceled bid!');
		this.router.navigate(['/dashbord']);	
	}
}
