import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})

export class RouteMapComponent implements OnInit {

	lat: number = 51.678418;
	lng: number = 7.809007;

	urls = new Array<string>();

	constructor(private modalService: ModalService) { }

	ngOnInit() {
		//this.openModal('custom-model-myOTP');
		document.getElementById('call-modal-btn').click();
	}

	openModal(id: string) {
		this.modalService.open(id);
	}

	closeModal(id: string) {
		this.modalService.close(id);
	}

	onFileChanged(event) {
		this.urls = [];
		let files = event.target.files;
		if (files) {
			for (let file of files) {
				let reader = new FileReader();
				reader.onload = (e: any) => {
				  this.urls.push(e.target.result);
				}
				reader.readAsDataURL(file);
			}
		}
	}
}
