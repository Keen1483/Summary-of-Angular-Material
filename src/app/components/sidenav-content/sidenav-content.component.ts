import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {

  navLinks: string[];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.navLinks = this.headerService.navLinks;
  }

}
