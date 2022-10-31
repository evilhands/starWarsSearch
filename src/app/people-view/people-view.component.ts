import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwPipe } from '../sw.pipe';

@Component({
  selector: 'app-people-view',
  standalone: true,
  imports: [CommonModule, SwPipe],
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.scss']
})
export class PeopleViewComponent implements OnInit {

  @Input()
  people: any;

  constructor() { }

  ngOnInit(): void {
  }

}
