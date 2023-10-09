import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  thought: Thought = {
    content: '',
    authorship: '',
    template: 'template1'
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  createThought() {
    this.service.create(this.thought).subscribe( () => {
      this.router.navigate(['/thoughtList']);
    })
  }

  cancelThought() {
    this.router.navigate(['/thoughtList']);
  }

}
