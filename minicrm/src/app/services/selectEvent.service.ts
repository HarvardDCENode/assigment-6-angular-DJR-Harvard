import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordSelectService {
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
