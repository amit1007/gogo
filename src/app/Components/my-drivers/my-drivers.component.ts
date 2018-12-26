import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-drivers',
  templateUrl: './my-drivers.component.html',
  styleUrls: ['./my-drivers.component.css']
})
export class MyDriversComponent implements OnInit {
	data :any;
	constructor() { }

	ngOnInit() {
		this.data = [{'d_name':'Anil', 'd_mobile':'992233678945','d_working_hours_from' :'7 am','d_working_hours_to' :'7 pm', 'city':'pune, Mumbai' },
		{'d_name':'Ankit', 'd_mobile' :'992233678945', 'd_working_hours_from' :'5 am','d_working_hours_to' :'7 pm', 'city':'pune' },
		{'d_name':'Sunil', 'd_mobile' :'992233778945', 'd_working_hours_from' :'8 am','d_working_hours_to' :'9 pm', 'city':'pune' },
		{'d_name':'Alok', 'd_mobile' :'992233678945', 'd_working_hours_from' :'1 am','d_working_hours_to' :'10 pm', 'city':'pune' },
		{'d_name':'Tinku', 'd_mobile' :'992233698945', 'd_working_hours_from' :'4 am','d_working_hours_to' :'7 pm', 'city':'pune' },
		{'d_name':'XYZ', 'd_mobile' :'992233678945', 'd_working_hours_from' :'7 am','d_working_hours_to' :'12 pm', 'city':'pune, Mumbai' },
		{'d_name':'Mahesh', 'd_mobile' :'992233678945', 'd_working_hours_from' :'9 am','d_working_hours_to' :'7 pm', 'city':'pune' },
		{'d_name':'erer', 'd_mobile' :'992233672945', 'd_working_hours_from' :'7 am','d_working_hours_to' :'6 pm', 'city':'pune' },
		{'d_name':'jhjh', 'd_mobile' :'992233675945', 'd_working_hours_from' :'7 am','d_working_hours_to' :'9 pm', 'city':'pune' }
		]
	}
}
