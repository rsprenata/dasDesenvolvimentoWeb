import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEditarClienteComponent } from './inserir-editar-cliente.component';

describe('InserirEditarClienteComponent', () => {
  let component: InserirEditarClienteComponent;
  let fixture: ComponentFixture<InserirEditarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirEditarClienteComponent]
    });
    fixture = TestBed.createComponent(InserirEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
