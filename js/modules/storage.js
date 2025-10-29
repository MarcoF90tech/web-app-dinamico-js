// js/modules/storage.js

/**
 * Módulo para gerenciamento de dados no LocalStorage.
 */

const STORAGE_KEY = 'task-manager-data';

/**
 * Carrega a lista de tarefas do LocalStorage.
 * @returns {Array<Object>} A lista de tarefas ou um array vazio.
 */
export const loadTasks = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    // Garante que retorne um array se não houver dados
    return data ? JSON.parse(data) : [];
};

/**
 * Salva a lista de tarefas no LocalStorage.
 * @param {Array<Object>} tasks A lista de tarefas a ser salva.
 */
const saveTasks = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

/**
 * Adiciona uma nova tarefa à lista e salva.
 * @param {Object} newTask O objeto da nova tarefa.
 * @returns {Array<Object>} A lista de tarefas atualizada.
 */
export const addTask = (newTask) => {
    const tasks = loadTasks();
    // Adiciona um ID único simples (para fins de demonstração)
    const taskWithId = { 
        ...newTask, 
        id: Date.now() 
    }; 
    tasks.push(taskWithId);
    saveTasks(tasks);
    return tasks;
};

/**
 * Remove uma tarefa da lista pelo ID e salva.
 * @param {number} taskId O ID da tarefa a ser removida.
 * @returns {Array<Object>} A lista de tarefas atualizada.
 */
export const removeTask = (taskId) => {
    let tasks = loadTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks(tasks);
    return tasks;
};
