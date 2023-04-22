/** David Rasmussen HW6 4/22/2023
 *  person.component gets a person object from the parent component.
 *  future: make it generic for different types of objects.
 */
import { Component, Input } from '@angular/core';
import { Person } from '../../models/models';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input()
  person!: Person;
}
