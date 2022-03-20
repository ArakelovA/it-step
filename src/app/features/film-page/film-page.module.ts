import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmPageComponent } from './film-page.component';
import {RouterModule, Routes} from "@angular/router";
import {SortTableModule} from "../../shared/components/sort-table/sort-table.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {FilmPageEffects, fromFilmPage} from "./store";


const routes: Routes = [
  {
    path: '',
    component: FilmPageComponent
  }
]
@NgModule({
  declarations: [
    FilmPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromFilmPage.filmPageFeatureKey, fromFilmPage.reducer),
    EffectsModule.forFeature([FilmPageEffects]),
    SortTableModule,
  ],
  exports: [
    FilmPageComponent,
    RouterModule,
  ]
})
export class FilmPageModule { }
