import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  fillerNav = Array.from({ length: 9 }, (_, i) => `Nav item ${i + 1}`);

  ngOnInit() {
  }

}
