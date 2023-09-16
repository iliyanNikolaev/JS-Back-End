const host = 'http://localhost:3030'

const endpoints = {
    current: '/api/messages/'
}

export async function getMessagesByConversationId(conversationId){
    try {
        const response = await fetch(host + endpoints.current + conversationId);
        const data = await response.json();

        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}