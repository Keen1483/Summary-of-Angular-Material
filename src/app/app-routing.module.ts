import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconComponent } from './components/icon/icon.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CardComponent } from './components/card/card.component';
import { TabComponent } from './components/tab/tab.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ToolTipComponent } from './components/tool-tip/tool-tip.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TableComponent } from './components/table/table.component';
import { ScrollingComponent } from './components/scrolling/scrolling.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'icon', component: IconComponent},
  {path: 'badge', component: BadgeComponent},
  {path: 'progress-spinner', component: ProgressSpinnerComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'list', component: ListComponent},
  {path: 'grid-list', component: GridListComponent},
  {path: 'expansion-panel', component: ExpansionPanelComponent},
  {path: 'card', component: CardComponent},
  {path: 'tab', component: TabComponent},
  {path: 'stepper', component: StepperComponent},
  {path: 'input', component: InputComponent},
  {path: 'select', component: SelectComponent},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'tool-tip', component: ToolTipComponent},
  {path: 'snackbar', component: SnackbarComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'table', component: TableComponent},
  {path: 'scrolling', component: ScrollingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
