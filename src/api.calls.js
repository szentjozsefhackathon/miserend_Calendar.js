import axios from 'axios';

export async function updateItem(id, event) {
    console.log('> updateItem');
    const requestJson = JSON.parse(event);
    try {
        const response = await axios.put(`localhost:3000/api/miserend?id=${id}`, requestJson);
        console.log(response);
    } catch (error) {
        console.log(error);
        console.log('< updateItem: FAIL');
    }
    console.log('< updateItem: SUCCESS');
}
