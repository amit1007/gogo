import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	animations: [
		trigger('collapseNav', [
			state('open', style({
				opacity: '1',
				display: 'block',
				transform: 'translate3d(0, 0, 0)'
			})),
			state('closed',   style({
				opacity: '0',
				display: 'none',
				transform: 'translate3d(0, -100%, 0)'
			})),
			transition('closed => open', animate('200ms ease-in')),
			transition('open => closed', animate('100ms ease-out'))
		])
	]
})
export class HeaderComponent implements OnInit {

	collapseNav:string = "closed";

	toggleCollapse() {
		// this.show = !this.show
		this.collapseNav = this.collapseNav == "open" ? 'closed' : 'open';
	}

	constructor() { }

	ngOnInit() {
	}

}
