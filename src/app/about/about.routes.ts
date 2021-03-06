import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';


const routes: Routes = [
    { path: '', component: AboutComponent },
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);