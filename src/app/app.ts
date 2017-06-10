import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
 * Angular Modules
 */
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Setup redux with ngrx
import { Store, StoreModule } from '@ngrx/store';

/**
 * Import our child components
 */
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/app.component';

/**
 * Import material UI Components
 */
import { MaterialModule } from '@angular/material';

import { routes } from './app.routes';

/*
 * provide('AppStore', { useValue: appStore }),
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
