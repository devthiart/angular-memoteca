import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent {
  thoughtsList = [
    {
      content:  'Passing information to the child component',
      authorship: 'Dad Component',
      template: 'template2'
    },
    {
      content:  'My property is decorated with @input()',
      authorship: 'Child component',
      template: 'template1'
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod efficitur lectus. Donec ullamcorper urna eu eros bibendum posuere. Sed placerat diam eget turpis faucibus lobortis. Quisque nisl eros, vulputate vel laoreet quis, vehicula sed mi. Cras luctus lorem non dolor mattis vulputate.',
      authorship: 'Lorem ipsum',
      template: 'template3'
    }
  ];

}
