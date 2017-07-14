
export class Util {
        constructor(){

        }

  /*
  Animação de alteração de tamanho depois de movimento com o scroll

  Escolha um id da view e a posição do scroll aonde a animaçao vai acontecer e a altura antes 
  e depois da animação

  Utilize junto com @HostListener('window:scroll')
    Ex:
      @HostListener('window:scroll') onscroll(){
     new Util().scrollResize('footer', 100, 0, 100);
  }

  Importarção = import { HostListener } from '@angular/core';

  */
        scrollResize(domId: string, scrollPosition: number,  beforeHeight: number, afterHeight:number){
        let docEl = document.documentElement;
        let $class = document.getElementById(domId);
        let sTop = (window.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
        $class.style.height =  sTop > scrollPosition ? afterHeight+"px":beforeHeight+"px";

    }
    
}