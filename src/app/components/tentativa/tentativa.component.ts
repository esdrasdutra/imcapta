import { Coracao } from './../../shared/coracao.model';
import { Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.scss']
})
export class TentativaComponent implements OnInit, OnChanges {

  @Input() tentativas!: number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor(){ }

  ngOnChanges(){
    // this.coracoes.length
    if(this.tentativas !== this.coracoes.length){
      let index = this.coracoes.length - this.tentativas

      this.coracoes[index - 1].cheio = false
    }

    console.log("Tentativas recebidas no Painel: ", this.tentativas)
  }

  ngOnInit():void{

  }


}
