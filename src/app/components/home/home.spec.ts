import {
    async,
    inject,
    TestBed,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { HomeComponent } from './home.component';

describe('App component', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            HomeComponent,
        ],
    }));

});
