import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { Thought } from './../thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent {
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    template:''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe(
      (thought) => {
        this.thought = thought;
      }
    );
  }

  editThought() {
    this.service.edit(this.thought).subscribe(() => {
      this.router.navigate(['/thoughtList']);
    })
  }

  cancel() {

  };
}
