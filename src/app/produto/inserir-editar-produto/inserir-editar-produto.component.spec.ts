import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEditarProdutoComponent } from './inserir-editar-produto.component';

describe('InserirEditarProdutoComponent', () => {
  let component: InserirEditarProdutoComponent;
  let fixture: ComponentFixture<InserirEditarProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirEditarProdutoComponent]
    });
    fixture = TestBed.createComponent(InserirEditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
