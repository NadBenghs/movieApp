import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:"",component:MovieListComponent},
    {path:"movie/:id",component:MovieDetailComponent}

        
      
];
