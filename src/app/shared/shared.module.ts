import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericoDirective } from './directives/numerico.directive';
import { TamanhoMaximoValidatorDirective } from './directives/tamanho-maximo-validator.directive';



@NgModule({
  declarations: [
    NumericoDirective,
    TamanhoMaximoValidatorDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
