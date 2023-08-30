# dasDesenvolvimentoWeb
Trabalho DAS - Desenvolvimento Web - 2023

## Instalação
1. Instalar Node.js
	- Instalar versão 16
    - `node --version`
    - Verificar NPM
    - `npm --version`
2. Instalar pacotes `npm install`
3. Se já tem o ambiente montado:
    - `npm install -g typescript@latest`
    - `npm install -g @angular/cli@latest`
   Para uma instalação nova
    - `npm install -g @angular/cli`
4. Ligar `ng serve`

## Comandos uteis
- Criar modulo
    - ex: `ng g module pessoa`
- Criar modelo
    - ex: `ng g class shared/models/pessoa --type=model`
- Criar serviço
    - ex: `ng g service pessoa/services/pessoa`
- Criar componente
    - ex: `ng g component pessoa/listar-pessoa`
- Criar diretiva de validação
    - ex: `ng g directive shared/directives/numerico`
- Criar pipe
    - ex: `ng g pipe shared/pipes/meu-pipe`
