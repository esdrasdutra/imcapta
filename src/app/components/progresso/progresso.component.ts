import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
