// ANGULAR - Javascript Framework - by Beumsk



/**/
// ng new ProjectName
// ng generate component componentName



// IMPORT
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// DECORATOR
@Component({
	selector: 'name-component',
	templateUrl: './name.component.html',
	styleUrls: ['./name.component.css']
})

// EXPORT
export class NameComponent {
	public variableName: string;
	public pretrad: string;

	constructor (
		private router: Router
	) {
		this.pretrad = 'MODULES.NAME.';
	}
}

