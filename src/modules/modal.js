const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const titleInput = document.getElementById('ticket-title');
const descriptionInput = document.getElementById('ticket-description');
const deleteModal = document.getElementById('delete-confirm-modal');
const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    
    if (modal) {
      modal.classList.add('hidden');
    }
  });
  export function openModal(title = '', description = '', isEdit = false) {
    document.getElementById('ticket-title').value = title;
    document.getElementById('ticket-description').value = description;
    document.getElementById('modal-title').textContent = isEdit ? 'Редактировать тикет' : 'Добавить тикет';
    document.getElementById('modal').classList.remove('hidden');
}

export function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

export function openDeleteConfirmModal() {
  document.getElementById('delete-confirm-modal').classList.remove('hidden');
}

export function closeDeleteConfirmModal() {
  document.getElementById('delete-confirm-modal').classList.add('hidden');
}