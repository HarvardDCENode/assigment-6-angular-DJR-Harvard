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
