import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  // options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'}
  ];

  myControl = new FormControl();
  filteredOptions: Observable<{ name: string }[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.objectOptions.slice();
      })
    );
  }

  displayFn(subject: {name: string}) {
    return subject && subject.name ? subject.name : '';
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.objectOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
