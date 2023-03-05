import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconComponent } from './components/icon/icon.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { ListComponent } from './components/list/list.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CardComponent } from './components/card/card.component';
import { TabComponent } from './components/tab/tab.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ToolTipComponent } from './components/tool-tip/tool-tip.component';
import { SnackbarComponent, CustomSnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogComponent, DialogExampleComponent } from './components/dialog/dialog.component';
import { TableComponent } from './components/table/table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ScrollingComponent } from './components/scrolling/scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TypographyComponent,
    HomeComponent,
    ButtonToggleComponent,
    IconComponent,
    BadgeComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    SidenavContentComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    ToolTipComponent,
    SnackbarComponent,
    CustomSnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    TableComponent,
    ScrollingComponent
  ],
  entryComponents: [
    CustomSnackbarComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
