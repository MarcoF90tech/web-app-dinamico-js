// js/modules/templates.js

/**
 * Módulo para criação de templates HTML/JavaScript.
 * Demonstra o conceito de Template Literals para renderização.
 */

// Template da Lista de Tarefas (Página Home)
export const homeTemplate = (tasks) => `
    <h2>Minhas Tarefas Pendentes</h2>
    ${tasks.length === 0 
        ? '<p>Você não tem nenhuma tarefa pendente. Que tal adicionar uma?</p>' 
        : tasks.map(task => taskTemplate(task)).join('')
    }
`;

// Template de uma única Tarefa na lista
const taskTemplate = (task) => `
    <div class="task-list-item" data-id="${task.id}">
        <div>
            <strong>${task.title}</strong>
            <p style="font-size: 0.9em; color: #666;">${task.description.substring(0, 50)}...</p>
        </div>
        <button class="delete-task-btn" data-id="${task.id}">Concluir/Excluir</button>
    </div>
`;

// Template do Formulário de Adição de Tarefa (Página 'add')
export const addTaskTemplate = (message = '') => `
    <h2>Adicionar Nova Tarefa</h2>

    ${message ? `<div class="alert alert-success">${message}</div>` : ''}

    <form id="task-form">
        <div class="form-group">
            <label for="task-title">Título da Tarefa *</label>
            <input type="text" id="task-title" name="title" required>
            <p id="error-title" class="error-message"></p>
        </div>

        <div class="form-group">
            <label for="task-description">Descrição *</label>
            <textarea id="task-description" name="description" rows="4" required></textarea>
            <p id="error-description" class="error-message"></p>
        </div>

        <button type="submit">Salvar Tarefa</button>
    </form>
`;
