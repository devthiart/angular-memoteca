import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  @Input() thought = {
    content:  'I love Angular',
    authorship: 'DevThiart',
    template: 'template2'
  };

  widthThought(): string {
    console.log(this.thought.content.length);
    if(this.thought.content.length >= 256) {
      return 'thought-g';
    }

    return 'thought-p';
  }

}
