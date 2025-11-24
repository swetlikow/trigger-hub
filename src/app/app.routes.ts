import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Treatment } from './components/treatment/treatment';
import { FindPartner } from './components/find-partner/find-partner';
import { Consultation } from './components/consultation/consultation';
import { UsefulLinks } from './components/useful-links/useful-links';
import { Donate } from './components/donate/donate';
import { Hub } from './components/hub/hub';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'treatment', component: Treatment },
  { path: 'find-partner', component: FindPartner },
  { path: 'consultation', component: Consultation },
  { path: 'hub', component: Hub },
  { path: 'useful-links', component: UsefulLinks },
  { path: 'donate', component: Donate },
];
