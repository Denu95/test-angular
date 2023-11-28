import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AirComponent } from './air/air.component';
import { JordanComponent } from './jordan/jordan.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
        path: 'air',
        component: AirComponent
    },
    {
        path: 'jordan',
        component: JordanComponent
    },
];