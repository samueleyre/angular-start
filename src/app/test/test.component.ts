import { Component, OnInit } from '@angular/core';
import {TestService} from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title = 'component test';

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    console.log('C\'est chargé');
  }

  get userName(): string {
    return this.testService.userName;
  }


}
