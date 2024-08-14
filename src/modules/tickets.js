import { getTickets, createTicket, updateTicket, deleteTicket } from './api';
import { openModal, closeModal, openDeleteConfirmModal, closeDeleteConfirmModal } from './modal';

const ticketsList = document.getElementById('tickets-list');
let editedTicketId = null; // Переместили переменную сюда

export async function loadTickets() {
    const tickets = await getTickets();
    console.log('Loaded tickets:', tickets); // Логируем загруженные тикеты
    ticketsList.innerHTML = '';
    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.className = 'ticket';
        const createdDate = new Date(ticket.created).toLocaleString();
        ticketElement.innerHTML = `
            <div class="header">
                <input type="checkbox" class="status-checkbox" ${ticket.status ? 'checked' : ''} />
                <div class="title">${ticket.name}</div>
            </div>
            <div class="actions">
                <button class="edit-btn">✎</button>
                <button class="delete-btn">x</button>
            </div>
            <div class="created">Created: ${createdDate}</div>
            <div class="description">${ticket.description}</div>
        `;
        ticketsList.appendChild(ticketElement);

        ticketElement.querySelector('.status-checkbox').addEventListener('change', async (e) => {
            const updatedTicket = { ...ticket, status: e.target.checked };
            await updateTicket(ticket.id, updatedTicket);
            loadTickets();
        });

        ticketElement.querySelector('.edit-btn').addEventListener('click', () => {
            editedTicketId = ticket.id;
            console.log('Editing ticket:', editedTicketId); // Логируем ID редактируемого тикета
            openModal(ticket.name, ticket.description, true);
        });

        ticketElement.querySelector('.delete-btn').addEventListener('click', () => {
            editedTicketId = ticket.id;
            openDeleteConfirmModal();
        });

        document.getElementById('delete-confirm-modal').addEventListener('click', (e) => {
            if (e.target.id === 'cancel-delete-btn') {
                closeDeleteConfirmModal();
            } else if (e.target.id === 'confirm-delete-btn') {
                deleteTicketFromFrontend(editedTicketId);
                closeDeleteConfirmModal();
            }
        });

        

        ticketElement.addEventListener('click', async (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                const descriptionElement = ticketElement.querySelector('.description');
                if (!descriptionElement.textContent) {
                    const fullTicket = await getTicket(ticket.id);
                    descriptionElement.textContent = fullTicket.description;
                }
                descriptionElement.classList.toggle('visible');
            }
        });
    });
}

export async function addNewTicket(name, description) {
    const newTicket = await createTicket({ name, description });
    console.log('Created new ticket:', newTicket); // Логируем созданный тикет
    closeModal();
    loadTickets();
}

export async function editTicket(id, name, description) {
    const updatedTicket = await updateTicket(id, { name, description });
    console.log('Updated ticket:', updatedTicket); // Логируем обновленный тикет
    closeModal();
    loadTickets();
    editedTicketId = null;
}

export async function deleteTicketFromFrontend(id) {
    await deleteTicket(id);
    console.log('Deleted ticket ID:', id); // Логируем ID удаленного тикета
    closeDeleteConfirmModal();
    loadTickets();
}

// Обработчик для кнопки "OK" в модальном окне
document.getElementById('modal-ok-btn').addEventListener('click', async () => {
    const name = document.getElementById('ticket-title').value;
    const description = document.getElementById('ticket-description').value;
    if (editedTicketId) {
        console.log('Editing ticket ID:', editedTicketId); // Логируем ID перед редактированием
        await editTicket(editedTicketId, name, description);
        editedTicketId = null;
    } else {
        await addNewTicket(name, description);
    }
});

