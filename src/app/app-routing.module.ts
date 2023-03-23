import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';


const routes: Routes = [
    { path: 'home', component: PokeListComponent },
    { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
    { path: 'R&M', component: RickandmortyComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path:'**' , component:CustomErrorComponent},
    { path: 'Error', component:CustomErrorComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
