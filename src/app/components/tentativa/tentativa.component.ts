import { Coracao } from './../../shared/coracao.model';
import { Component} from '@angular/core';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.scss']
})
export class TentativaComponent{

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
}
