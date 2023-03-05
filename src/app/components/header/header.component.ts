import { EventEmitter } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navToggle: EventEmitter<boolean> = new EventEmitter();

  navLinks: string[];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.navLinks = this.headerService.navLinks;
  }

  navOpen() {
    this.navToggle.emit(true);
  }

}
