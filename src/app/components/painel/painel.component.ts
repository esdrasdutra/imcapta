import { Component, OnInit } from '@angular/core';
import { Frase } from '../../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})

export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a Frase:';
  public resposta!: string;

  public tentativas: number = 3;

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public isRight(): void {
    if (this.resposta == this.frases[this.rodada].frasePtBr) {
      this.rodada++;
      this.progresso = this.progresso + 100 / this.frases.length;
      this.atualizaRodada();

      this.resposta = '';
    } else {
      //diminuir a variável tentativas
      this.tentativas--;

      if (this.tentativas === -1) {
        alert('Você está sem corações.');
      }
    }
  }

  public atualizaRodada(): void {
    //atualizar a frase da rodada com base em algum critério
    this.rodadaFrase = this.frases[this.rodada];

    //limpar resposta do usuário
    this.resposta = '';
  }

  ngOnInit(): void {}
}
