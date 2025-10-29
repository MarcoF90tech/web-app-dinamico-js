// js/modules/validation.js

/**
 * Módulo para verificação de consistência de dados em formulários.
 */

/**
 * Valida os campos do formulário de tarefas.
 * @param {HTMLFormElement} form O elemento do formulário.
 * @returns {boolean} True se o formulário for válido, False caso contrário.
 */
export const validateTaskForm = (form) => {
    let isValid = true;

    // 1. Resetar mensagens de erro
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const title = form.elements['title'].value.trim();
    const description = form.elements['description'].value.trim();

    // 2. Validação do Título
    if (title.length < 5) {
        document.getElementById('error-title').textContent = 
            'O título deve ter pelo menos 5 caracteres.';
        isValid = false;
    }

    // 3. Validação da Descrição
    if (description.length < 10) {
        document.getElementById('error-description').textContent = 
            'A descrição deve ter pelo menos 10 caracteres.';
        isValid = false;
    }
    
    // **Aviso ao Usuário:** A mensagem é mostrada na `p.error-message` que está
    // diretamente abaixo do campo, como especificado.

    return isValid;
};
