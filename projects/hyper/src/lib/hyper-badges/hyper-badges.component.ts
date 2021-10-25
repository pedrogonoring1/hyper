import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hp-badge',
  templateUrl: './hyper-badges.component.html',
  styleUrls: ['./hyper-badges.component.css']
})
export class HyperBadgesComponent implements OnInit {

  @Input() textBadge: string;
  @Input() typeBadge: string;

  constructor() { }

  ngOnInit(): void {

  }
}
