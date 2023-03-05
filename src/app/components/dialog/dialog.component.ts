import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Keen'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-example',
  templateUrl: './dialog-example.html',
  styleUrls: ['./dialog-example.scss']
})
export class DialogExampleComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) {}
}
