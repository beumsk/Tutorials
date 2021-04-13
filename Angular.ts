// ANGULAR - Javascript Framework - by Beumsk



/**/
// npm i @angular/cli -g
// ng new projectName
// ng generate component componentName


// COMPONENTS

  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'name-component', // <name-component> in HTML
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.css']
  })

  export class NameComponent {
    public pretrad: string;
    public show: boolean;

    constructor (
      private router: Router
    ) {
      this.pretrad = 'MODULES.NAME.';
      this.show = true;
    }

    public ngOnInit(): void {}

    public toggleShow(): void {
      this.show = !this.show;
    }
  }


// MODULES

  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      CommonModule,
      BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

  export class AppModule {}



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

