// js/app.js

/**
 * Lógica principal da aplicação (Single Page Application - SPA).
 * Implementa manipulação do DOM e roteamento básico.
 */

import { homeTemplate, addTaskTemplate } from './modules/templates.js';
import { loadTasks, addTask, removeTask } from './modules/storage.js';
import { validateTaskForm } from './modules/validation.js';

const appContainer = document.getElementById('app-container');
let currentRoute = 'home'; // Rota inicial

// Estados da Aplicação
let tasks = loadTasks();
let formSuccessMessage = '';

/**
 * Renderiza o conteúdo da página com base na rota atual.
 * @param {string} route A rota a ser renderizada ('home' ou 'add').
 * @param {string} message Mensagem de sucesso opcional para o formulário.
 */
const render = (route, message = '') => {
    appContainer.innerHTML = '';
    
    switch (route) {
        case 'home':
            tasks = loadTasks(); // Recarrega do storage antes de renderizar
            appContainer.innerHTML = homeTemplate(tasks);
            // Adiciona o listener para exclusão de tarefas
            document.querySelectorAll('.delete-task-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const taskId = parseInt(e.target.dataset.id);
                    handleDeleteTask(taskId);
                });
            });
            break;

        case 'add':
            appContainer.innerHTML = addTaskTemplate(message);
            
            // Adiciona o listener para o SUBMIT do formulário
            const form = document.getElementById('task-form');
            if (form) {
                form.addEventListener('submit', handleFormSubmit);
            }
            break;

        default:
            appContainer.innerHTML = '<h2>Página Não Encontrada</h2>';
    }
    currentRoute = route; // Atualiza o estado da rota
};

/**
 * Manipulador do evento de submit do formulário.
 * @param {Event} e O evento de submit.
 */
const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    // 1. Validação de Consistência
    if (!validateTaskForm(form)) {
        // Se a validação falhar, para a execução.
        return; 
    }

    // 2. Captura dos dados
    const newTask = {
        title: form.elements['title'].value.trim(),
        description: form.elements['description'].value.trim()
    };

    // 3. Armazenamento
    addTask(newTask);

    // 4. Feedback e Redirecionamento
    // Vamos apenas re-renderizar o formulário com uma mensagem de sucesso
    // para demonstrar o loop de feedback, e limpar o formulário.
    form.reset();
    render('add', 'Tarefa adicionada com sucesso! Você pode adicionar outra.');
};

/**
 * Manipulador do evento de exclusão de tarefa.
 * @param {number} taskId O ID da tarefa a ser excluída.
 */
const handleDeleteTask = (taskId) => {
    removeTask(taskId);
    // Renderiza novamente a página Home para mostrar a lista atualizada
    render('home'); 
};


/**
 * Função para configurar os Event Listeners de navegação.
 */
const setupNavListeners = () => {
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', (e) => {
            const route = e.target.dataset.route;
            // Altera a rota e renderiza
            render(route); 
        });
    });
};

/**
 * Exporta a função que inicializa a aplicação.
 */
export const initApp = () => {
    setupNavListeners();
    render(currentRoute); // Renderiza a página inicial
};
