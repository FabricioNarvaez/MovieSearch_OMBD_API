import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Componentes
import { SearchComponent } from "./components/search/search.component";
import { FilmComponent } from "./components/film/film.component";
import { ErrorComponent } from "./components/error/error.component";

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: SearchComponent},
    {path: 'home', component: SearchComponent},
    {path: 'film/:id', component: FilmComponent},
    {path: '**', component: ErrorComponent}
]

// Exportar el módulo de rutas
export const appRputingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
