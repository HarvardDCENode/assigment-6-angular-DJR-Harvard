import { Injectable } from '@angular/core';
import companies from '../../assets/testCompanies.json';
import persons from '../../assets/testPersons.json';
import { Company, Person } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCompanies(): Company[] {
    return companies;
  }

  getCompany(id: string): Company | null {
    const company = companies.find(c => String(c._id) === id);
    return company || null;
  }

  getPersonsByCompanyId(id: string): Person[] {
    const companyPersons = persons.filter(p => String(p.company) === id);
    return companyPersons;
  }
  


  getPersons(): Person[] {
    return persons;
  }

  getPerson(id: string): Person | null {
    const person = persons.find(p => String(p._id) === id);
    return person || null;
  }

}
