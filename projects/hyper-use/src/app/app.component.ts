import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hyper-use';

  public textBadge = 'bagde maneiro';
  public typeBadge = 'primary';

  public textBadge2 = 'bagde maneiro';
  public typeBadge2 = 'danger';

  public textBadge3 = 'bagde maneiro';
  public typeBadge3 = 'info';

  public textBadge4 = 'bagde maneiro';
  public typeBadge4 = 'caution';

  formulario: FormGroup
  constructor(private readonly formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(6) ,Validators.email]]
    })
  }
  ngOnInit(): void {
    const control = this.formulario.get('name');
    control.valueChanges.subscribe(x => {
      //console.log(control.errors);
    })
  }
  reset() {
    this.formulario.reset();
  }
    }
