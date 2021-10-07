import { Component, OnInit } from '@angular/core';
import { Frase } from '../../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Frase [] = FRASES
  public instrucao: string = 'Traduza a Frase:'
  public resposta!:string

  public rodada: number = 0
  public rodadaFrase!: Frase

  public progresso: string = ''

  constructor() {
    this.atualizaRodada()
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public isRight(): void{
    if (this.resposta == this.frases[this.rodada].frasePtBr){
      alert('ASSERTOU, MIZERÁAAVI')
      this.rodada ++

      var temp = 0
      temp = temp + (100 / this.frases.length)
      this.progresso = temp.toString()

      console.log(this.progresso)

      this.atualizaRodada()

      this.resposta = ''

    } else {
      alert('ERRRRROU')
    }
  }

  public atualizaRodada(): void{

    //atualizar a frase da rodada com base em algum critério
    this.rodadaFrase = this.frases[this.rodada]

    //limpar resposta do usuário
    this.resposta = ''
  }

  ngOnInit(): void {

  }
}
