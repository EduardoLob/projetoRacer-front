import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MRData, StandingsList } from './pilotos';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public valor: MRData;
  public standingsList: StandingsList[];

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.listarTodosPilotos()
  }

  listarTodosPilotos(){
    this.api.buscarPilotos().subscribe(res => {
      this.valor = res;
      console.log(res, "pilotos")
      console.log(this.valor)
    })
  }
}
