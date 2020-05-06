import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title:string = 'Angular CRUD';
	msg:string = '';
	hiddeUpdate = true;
	
	employees = [
		{
			name: 'Carolina',
			position: 'Frontend Developer',
			email: 'carolina@email.com'
		},
		{
			name: 'Alejandro',
			position: 'Frontend Developer',
			email: 'alejandro@email.com'
		},
		{
			name: 'Gustavo',
			position: 'Project Manager',
			email: 'gustavo@email.com'
		}
	];

	model:any = {};
	model2:any = {};

	addEmployee():void {
		this.employees.push(this.model);
		this.model = {};
		this.msg = 'Added profile!'
	};

	deleteEmployee(i):void {
		var answer = confirm('Are you sure to delete this profile?')
		if(answer) {
			this.employees.splice(i, 1);
			this.msg = 'Deleted profile!';
		}
	};

	myValue;
	editEmployee(i):void {
		this.hiddeUpdate = false;
		this.model2.name = this.employees[i].name;
		this.model2.position = this.employees[i].position;
		this.model2.email = this.employees[i].email;
		this.myValue = i
	};

	updateEmployee():void {
		let i = this.myValue;
		for(let j = 0; j < this.employees.length; j++) {
			if(i === j) {
				this.employees[i] = this.model2;
				this.model2 = {};
			}
		}
		this.msg = 'Updated profile!'
		this.hiddeUpdate = true;
	};

	closeAlert():void {
		this.msg = '';
	}

}
