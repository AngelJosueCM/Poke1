import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent {
    data: any[] = [];


    constructor(private apiService: ApiService){};

    ngOnInit(): void{
        this.llenarDatos()
    }

    llenarDatos(){
        this.apiService.getData().subscribe(data => {
          this.data = data;
          console.log(this.data);
        })
    }
}
