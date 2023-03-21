import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';

const routes: Routes = [
    { path: 'home', component: PokeListComponent },
    { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path:'**' , component:CustomErrorComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
