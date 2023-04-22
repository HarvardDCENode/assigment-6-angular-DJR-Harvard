/** David Rasmussen HW6 4/22/2023
 *  selectEvent.service exists such that two sibling components 
 *  can communicate. The List component emits an event when a row
 *  is selected. The Detail component subscribes to the event and
 *  updates its view.
 */
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordSelectService {
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
