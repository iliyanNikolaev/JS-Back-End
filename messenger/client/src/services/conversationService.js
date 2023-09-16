const host = 'http://localhost:3030'

const endpoints = {
    conversations: '/api/conversations',
    byId: '/api/conversations/'
}

export async function getAllConversationsByUserId(userId) {
    try {
        const response = await fetch(host + endpoints.byId);
        const data = await response.json();

        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}