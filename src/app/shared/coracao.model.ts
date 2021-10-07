export class Coracao {
  public urlCoracaoCheio: string = '/assets/coracao_cheio.png';
  public urlCoracaoVazio: string = '/assets/coracao_vazio.png';

  constructor(public cheio: boolean = true) {}
  public exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
