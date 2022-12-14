import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleOpenSidenav(): void {
    this.SideNavigationToggle.emit();
  }

}
