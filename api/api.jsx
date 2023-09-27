
import axios from 'axios';

export async function API1() {

    try {
        const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response1.data;


    } catch (error) {
        console.error('Error in Fetching:', error)
        console.log(error.response.data);
    }

}

export async function API2() {
    try {
        const response2 = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response2.data;

    } catch (error) {
        console.error('Error in Fetching:', error)
        console.log(error.response.data);
    }
}