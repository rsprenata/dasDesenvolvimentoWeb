import { Produto } from './produto.model';

describe('Produto', () => {
  it('should create an instance', () => {
    expect(new Produto(3,'ola teste')).toBeTruthy();
  });
});
