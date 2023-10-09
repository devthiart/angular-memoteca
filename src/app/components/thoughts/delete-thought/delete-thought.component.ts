import { ThoughtService } from './../thought.service';
import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent {
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    template: ''
  }

  /* ActivatedRoute: Provides access to information about a route associated with
     a component that is loaded in an outlet.
     Documentation: https://angular.io/api/router/ActivatedRoute
  */
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get id using ActivatedRoute.
    this.service.searchById( parseInt(id!) ).subscribe(
      (thought) => {
        this.thought = thought;
      }
    )
  }

  deleteThought() {
    if(this.thought.id){
      this.service.delete(this.thought.id).subscribe(
        () => {
          this.router.navigate(['/thoughtList']);
        }
      )
    }
  }

  cancel() {
    this.router.navigate(['/thoughtList']);
  }

}
