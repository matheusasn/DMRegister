import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  @Output() isSave = new EventEmitter<any>();
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private service: ProjectService,
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [null, [Validators.required]],
      description: [null, [Validators.required]],
      title: [null, [Validators.required]],
      statusProject: [null, [Validators.required]],
      statusSurvey: [null, [Validators.required]],
    })
  }

  submit(): void{
    const dataProjects: ProjectComponent = this.form.getRawValue();
    this.service.save(dataProjects).subscribe(result => {
      console.log(result)
    }, err => console.log(err));
  }

}
