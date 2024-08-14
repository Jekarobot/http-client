import { loadTickets } from './modules/tickets';
import { openModal, closeModal } from './modules/modal';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    loadTickets();

    document.getElementById('add-ticket-btn').addEventListener('click', () => {
        openModal();
    });
    document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
});