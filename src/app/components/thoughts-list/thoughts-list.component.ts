import { Thought } from './../thoughts/thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent {
  thoughtsList: Thought[] = [];
}
