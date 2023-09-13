import { Component } from '@angular/core';
import { Receita } from 'src/app/services/pratos/prato';
import { CadastrarService } from 'src/app/services/cadastrar/cadastrar.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public receitas : Receita[] = [];
  receitasFiltradas: Receita[] = [];

  constructor(private alertController: AlertController,
    private router : Router, 
    private cadastrarService : CadastrarService) {
      this.receitas = this.cadastrarService.obterTodos();
    }


    ionViewWillEnter() {
      this.receitasFiltradas = [...this.receitas];
    }
  
    filtrarReceitas(event: any) {
      const nome: string = event.target.value || '';
  
      if (nome.trim() === '') {
  
        this.receitasFiltradas = [...this.receitas];
      } else {
        this.receitasFiltradas = this.receitas.filter((receita) =>
          receita.nome.toLowerCase().includes(nome.toLowerCase())
        );
      }
    }
}
