/** David Rasmussen HW6 4/22/2023
 *  list.component displays a list of companies. 
 *  future: make it generic for different types of objects.
 */
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Company, Person } from '../../models/models';
import { RecordSelectService } from '../../services/selectEvent.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  companies: Company[] = [];
  persons: Person[] = [];
  loading = true;

  constructor(private dataService: DataService, private recordSelectService: RecordSelectService) {
    this.fetchData();
  }

  fetchData() {
    //no async logic for now, as mock data is bundled with application.
    this.companies = this.dataService.getCompanies();
    this.persons = this.dataService.getPersons();
    this.loading = false;
  }

  onClickCompany(company: Company) {
    const recordId = company._id;
    const type = 'Company';
    this.recordSelectService.eventEmitter.emit({ type, recordId });
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
  }

}
