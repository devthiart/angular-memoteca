import { Component } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  thought: Thought = {
    id: 1,
    content: 'Learning Angular',
    authorship: 'DevThiart',
    template: 'template1'
  }

  createThought() {
    alert("Thought created.")
  }

  cancelThought() {
    alert("Thought canceled.")
  }

}
