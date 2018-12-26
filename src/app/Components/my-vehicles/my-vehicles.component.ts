import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.component.html',
  styleUrls: ['./my-vehicles.component.css']
})
export class MyVehiclesComponent implements OnInit {
	data :any;
	constructor() { }

	ngOnInit() {
		this.data = [
		{'veh_owner_name':'Anil', 'veh_name':'Tata Signa','veh_type' :'open','d_working_hours_to' :'7 pm', 'd_working_hours_from':'7 am' },
		{'veh_owner_name':'Ankit', 'veh_name' :'Tata Signa', 'veh_type' :'close','d_working_hours_to' :'7 am', 'd_working_hours_from':'2 am' },
		{'veh_owner_name':'Sunil', 'veh_name' :'Tata Prima', 'veh_type' :'Tarpaulin covered','d_working_hours_to' :'9 pm', 'd_working_hours_from':'8 pm' },
		{'veh_owner_name':'Alok', 'veh_name' :'Paiggio Appe', 'veh_type' :'open','d_working_hours_to' :'10 pm', 'd_working_hours_from':'4 am' },
		{'veh_owner_name':'Tinku', 'veh_name' :'Mini cargo ', 'veh_type' :'Tarpaulin covered','d_working_hours_to' :'7 pm', 'd_working_hours_from':'1 pm' },
		{'veh_owner_name':'XYZ', 'veh_name' :'Loading auto', 'veh_type' :'close','d_working_hours_to' :'12 pm', 'd_working_hours_from':'9 am' },
		{'veh_owner_name':'Mahesh', 'veh_name' :'Maxima Cargo', 'veh_type' :'close','d_working_hours_to' :'7 pm', 'd_working_hours_from':'7 am' },
		{'veh_owner_name':'erer', 'veh_name' :'Mahindra Alfa Plus', 'veh_type' :'open','d_working_hours_to' :'6 pm', 'd_working_hours_from':'3 am' },
		{'veh_owner_name':'jhjh', 'veh_name' :'Tata Signa', 'veh_type' :'Tarpaulin covered','d_working_hours_to' :'9 pm', 'd_working_hours_from':'12 am' }
		]
	}

}
