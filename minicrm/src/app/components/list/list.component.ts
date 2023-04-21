import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Company, Person } from '../../models/models';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  companies: Company[] = [];
  persons: Person[] = [];
  loading = true;

  @Output() companyClicked = new EventEmitter<{ type: string, recordId: string }>();

  
  constructor(private dataService: DataService) { 
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
    this.companyClicked.emit({ type, recordId });
  }
  
}
