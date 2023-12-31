import { Injectable } from '@angular/core';
import { Receita } from '../pratos/prato';
@Injectable({
  providedIn: 'root'
})

export class CadastrarService {
  public listaDeReceitas : Receita[] = [];
  cont = 1;
  constructor() {
    let c1 : Receita = new Receita('Pão com mateiga', ['pão', 'manteiga'] ,'Pegue o pão e passe manteiga nele');
    c1.tipo = 0
    c1.id = 0;
    c1.image = "https://media-cdn.tripadvisor.com/media/photo-s/09/fe/4e/47/pao-com-manteiga-na-chapa.jpg"
    this.listaDeReceitas.push(c1);
   }

   cadastrar(receita : Receita){
    this.listaDeReceitas.push(receita);
    this.cont += 1;
   }

   obterTodos() : Receita[]{
    return this.listaDeReceitas;
   }

   deletar(indice : number){
    this.listaDeReceitas.splice(indice, 1);
    for (let receita of this.listaDeReceitas) {
      if(receita.id > indice){
        receita.id -= 1;
      }
    }
    this.cont-=1;
   }

   atualizar(indice : number, novo : Receita){
    this.listaDeReceitas[indice] = novo;
   }

   obterPorIndice(indice : number) : Receita{
    return this.listaDeReceitas[indice];
   }
  }