import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackbar(message: string, action: string) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snacbar action was triggered!');
    });
  }

  openCustomSnackber() {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {duration: 2000});
  }

}

@Component({
  selector: 'custom-snackbar',
  // template: `<span style='color: orange'>Custom Snackbar</span>`
  templateUrl: './custom-snackbar.html',
  styles: []
})
export class CustomSnackbarComponent {
  message = 'Dynamic Custom Snackbar';
}
