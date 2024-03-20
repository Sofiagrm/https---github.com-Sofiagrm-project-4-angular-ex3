import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex3-router';
  time = Date.now();
  
  constructor(){
    setInterval(() => {
			this.time = Date.now();
		}, 1000);
	}

}
