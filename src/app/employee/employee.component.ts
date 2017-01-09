import {Component} from '@angular/core';
import {Employee} from './employee.model';

@Component({
  selector: 'employee',
  styleUrls: ['./employee.component.css'],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
    languages = ['German', 'English', 'Spanish', 'Other'];
    model = new Employee('René', 'Winkler', true, 'w2', 'German');
    
    lastNameToUpperCase(value: string) {
        if(value.length > 0) 
            this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
        else
            this.model.lastName = value;
    }
}
