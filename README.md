# IMC - Calculadora Furreca

> Status do Projeto: ⚠️ Em Refatoração (Veja a seção de Melhorias)

## 📖 Sobre o Projeto
Este é um projeto de estudo desenvolvido para praticar a lógica de programação com **JavaScript**, manipulação do **DOM (Document Object Model)** e estilização com **HTML/CSS**.

O objetivo principal é criar uma calculadora de Índice de Massa Corporal (IMC) interativa, onde o usuário insere seus dados e recebe instantaneamente sua classificação de saúde (Abaixo do peso, Normal, Sobrepeso ou Obesidade).

Além da aplicação principal, o projeto contém uma pasta de **testes de lógica (`/test`)**, onde experimento loops, arrays e objetos antes de aplicar no código final.

## 🚀 Funcionalidades
- [x] Captura de dados do usuário (Nome, Peso, Altura).
- [x] Conversão de tipos de dados (String para Number).
- [x] Cálculo matemático do IMC com arredondamento (`toFixed`).
- [x] Classificação automática baseada na tabela da OMS.
- [x] Exibição dinâmica do resultado no HTML.
- [x] Validação básica (impede cálculo com campos vazios).

## 📂 Estrutura de Arquivos

```text
/
├── index.html           # Interface principal do usuário
├── css/
│   └── style.css        # Estilização da página
├── scripts/
│   └── script.js        # Lógica principal da calculadora (DOM + Funções)
└── test/                # Sandbox de aprendizado (rascunhos)
    ├── test-for.js      # Estudos sobre laços de repetição e Math.random
    ├── test-imc-simples.js # Lógica do IMC aplicada em Arrays de Objetos
    └── testejs.js       # Testes experimentais de sintaxe
```

## ✨ Melhorias de Funcionalidade

- [ ] Limpar Campos: Adicionar um botão ou funcionalidade para limpar os inputs após o cálculo.

- [ ] Validação de Negativos: Impedir que o usuário digite pesos ou alturas negativas.

- [ ] Feedback Visual: Mudar a cor do resultado dependendo da classificação (ex: Verde para "Normal", Vermelho para "Obesidade").

## 🎨 Melhorias de Código (Refatoração)

- [ ] Mover a lista de pessoas do arquivo test-imc-simples.js para ser usada na interface principal futuramente (simular um histórico).

- [ ] Melhorar a nomenclatura da função calcImcDaGalera para algo mais genérico, como calcularImc.