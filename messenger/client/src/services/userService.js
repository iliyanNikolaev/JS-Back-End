const host = 'http://localhost:3030'

const endpoints = {
    all: '/api/users',
    byId: '/api/users/'
}

export async function getAllUsers() {
    try {
        const response = await fetch(host + endpoints.all);
        const data = await response.json();

        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function getUserById(userId) {
    try {
        const response = await fetch(host + endpoints.byId + userId);
        const data = await response.json();

        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}