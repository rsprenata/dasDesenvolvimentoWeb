import { Directive, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[tamanhoMaximoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TamanhoMaximoValidatorDirective,
    multi: true
  }]
})
export class TamanhoMaximoValidatorDirective implements Validator, OnInit {
  @Input("tamanhoMaximo") tamanhoMaximo: string = "0";

  constructor() { }

  ngOnInit() { }
  
  validate(c: FormControl) {
    let v: string = c.value;

    if (isNaN(+v)) {
      return { 'tamanho-maximo': true, 'requiredValue': +this.tamanhoMaximo }
    }
    if (v.length > +this.tamanhoMaximo) {
      return { 'tamanho-maximo': true, 'requiredValue': +this.tamanhoMaximo }
    }
    return null;
  }
}
