import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from "./form/form.component";


export const router: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'form', component: FormComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);