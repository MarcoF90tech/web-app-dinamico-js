# web-app-dinamico-js
Projeto de aplicação web dinâmica com JavaScript, demonstrando SPA, manipulação do DOM e armazenamento local.

# 🚀 Gerenciador de Tarefas Dinâmico (To-Do List)

Este é um projeto de aplicação web dinâmica desenvolvido para a disciplina de Desenvolvimento Front-End Para Web da Cruzeiro do Sul

O principal objetivo é demonstrar o domínio de manipulação do DOM (Document Object Model) e a criação de uma experiência interativa, simulando uma **Single Page Application (SPA)** com persistência de dados via `localStorage`.

## ✨ Funcionalidades Principais

* **SPA Básico:** Navegação entre a lista de tarefas ("Home") e o formulário de adição ("Nova Tarefa") sem recarregar a página.
* **Manipulação do DOM:** Injeção e substituição dinâmica de conteúdo HTML via JavaScript.
* **Armazenamento Local:** As tarefas são persistidas utilizando o `localStorage` do navegador, mantendo os dados salvos mesmo após o fechamento da página.
* **Validação de Formulários:** Sistema de verificação de consistência de dados nos campos de Título e Descrição, com aviso explícito ao usuário em caso de preenchimento incorreto.
* **Templates JS:** Utilização de *Template Literals* para a criação modular e reutilizável das interfaces (páginas e itens de lista).

## 🛠️ Especificações Técnicas Obrigatórias

As especificações técnicas do projeto foram atendidas da seguinte forma:

| Especificação Obrigatória | Implementação | Módulo Responsável |
| :--- | :--- | :--- |
| **Sistema de SPA Básico** | Roteamento simples via `data-attributes` e função `render()` no `app.js`. | `js/app.js` |
| **Criação de Templates JS** | Utilização de *Template Literals* (` `` `) para gerar views e componentes. | `js/modules/templates.js` |
| **Verificação de Consistência** | Função `validateTaskForm` checa tamanho mínimo e exibe mensagens de erro (`p.error-message`). | `js/modules/validation.js` |
| **Código Modular** | O projeto está dividido em módulos específicos para cada responsabilidade (`storage`, `validation`, `templates`). | Pasta `js/modules` |

## 📁 Estrutura do Projeto

O código está organizado em uma estrutura modular para facilitar a manutenção e leitura:

/projeto-js-faculdade ├── index.html # O container da SPA ├── /css │ └── style.css # Estilos básicos └── /js ├── app.js # Lógica principal, Roteamento (SPA), e manipulação do DOM ├── main.js # Ponto de entrada (Inicializa a aplicação) └── /modules # Código JavaScript Modular ├── storage.js # Gerenciamento de localStorage ├── templates.js # Geração de HTML via JS Templates └── validation.js # Validação de dados do formulário

## ⚙️ Como Executar

Para rodar esta aplicação, basta:

1.  **Clonar este repositório:**
    ```bash
    git clone (https://github.com/MarcoF90tech/web-app-dinamico-js)
    ```
2.  **Abrir o arquivo `index.html`** diretamente no seu navegador.

*Nota: Não é necessário um servidor local, pois o projeto utiliza apenas recursos front-end (HTML, CSS, JavaScript e localStorage).*

---

### **Desenvolvido por**

**Nome:** Marco Aurélio Fernandes Figueira
