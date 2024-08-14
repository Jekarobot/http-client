export async function getTickets() {
    const response = await fetch('https://web-production-4700.up.railway.app/tickets');
    return await response.json();
}

export async function getTicket(id) {
    const response = await fetch(`https://web-production-4700.up.railway.app/tickets/${id}`);
    return response.json();
}

export async function createTicket(ticket) {
    const response = await fetch('https://web-production-4700.up.railway.app/tickets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticket),
    });
    return await response.json();
}

export async function updateTicket(id, updatedData) {
    const response = await fetch(`https://web-production-4700.up.railway.app/tickets/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    return await response.json();
}

export async function deleteTicket(id) {
    await fetch(`https://web-production-4700.up.railway.app/tickets/${id}`, {
        method: 'DELETE',
    });
}