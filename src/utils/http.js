import fetch from 'svelte/fetch';
import { isShowLoading } from '../stores/index.js'
class Ajax {
    baseUrl() {
        return 'https://jsonplaceholder.typicode.com';
    };
    get(url) {
        isShowLoading.set(true);
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl() + url)
                .then(res => res.json())
                .then(data => {
                    resolve(data);
                    isShowLoading.set(false);
                })
                .catch(error => {
                    reject(error);
                    isShowLoading.set(false);
                })
        })
    };
    post(url, params) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl() + url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    };
}
export default new Ajax()