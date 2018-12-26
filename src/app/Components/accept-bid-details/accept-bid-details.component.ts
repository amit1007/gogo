import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accept-bid-details',
  templateUrl: './accept-bid-details.component.html',
  styleUrls: ['./accept-bid-details.component.css']
})
export class AcceptBidDetailsComponent implements OnInit {

  constructor(private toastr: ToastrService,private router:Router) { }

	ngOnInit() {
	}

	saveBid(){
		this.toastr.success('Thank You', 'All the Best!');
		this.router.navigate(['/dashbord']);
	}
}
