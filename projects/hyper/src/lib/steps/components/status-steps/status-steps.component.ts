import { Component, OnInit } from '@angular/core';
import { StatusStep } from '../../models/status-steps/status-step';

@Component({
  selector: 'hp-status-steps',
  templateUrl: './status-steps.component.html',
  styleUrls: ['./status-steps.component.css']
})
export class StatusStepsComponent implements OnInit {

  public stepsForRenderizing: Array<StatusStep>;
  public countOfSteps: number;

  constructor() { }

  ngOnInit(): void {
    this.stepsForRenderizing = [];
    this.countOfSteps = 0;
    this.createSteps();
    this.countOfSteps = this.stepsForRenderizing.length;
  }

  public createSteps() {
    var step = new StatusStep({
      nameStep: "Step 1",
      statusStep: "step-ok"
    })

    var step2 = new StatusStep({
      nameStep: "Step 2",
      statusStep: "step-ok"
    })

    var step3 = new StatusStep({
      nameStep: "Step 3",
      statusStep: "step-on"
    })

    var step4 = new StatusStep({
      nameStep: "Step 4",
      statusStep: "step-none"
    })

    var step5 = new StatusStep({
      nameStep: "Step 5",
      statusStep: "step-none"
    })

    this.stepsForRenderizing.push(step);
    this.stepsForRenderizing.push(step2);
    this.stepsForRenderizing.push(step3);
    this.stepsForRenderizing.push(step4);
    this.stepsForRenderizing.push(step5);
    console.log(this.stepsForRenderizing)
  }

}
