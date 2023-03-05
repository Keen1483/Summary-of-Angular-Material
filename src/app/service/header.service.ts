import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  navLinks = [
    'button',
    'typography',
    'button-toggle',
    'icon',
    'badge',
    'progress-spinner',
    'toolbar',
    'sidenav',
    'menu',
    'list',
    'grid-list',
    'expansion-panel',
    'card',
    'tab',
    'stepper',
    'input',
    'select',
    'autocomplete',
    'checkbox',
    'datepicker',
    'tool-tip',
    'snackbar',
    'dialog',
    'table',
    'scrolling'
  ];

  constructor() { }
}
