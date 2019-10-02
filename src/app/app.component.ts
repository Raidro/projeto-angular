import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Mateus';

  adiciona() {
    const numero = Math.round(Math.random() * 100);
    this.nome = `Mateus ${numero}`;
    console.log(`Adicionado ${this.nome}`);
  }

  /*
  adiciona(nome){
 console.log(nome.value);
  }
  Variavel por referencia
  */

  alteraNome(evento) { // metodo
    this.nome = evento.target.value;
  }

  isDisabled(): boolean{ // metodo
    return this.nome.length <= 2;
  }



}
