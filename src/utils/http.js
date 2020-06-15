import fetch from 'svelte/fetch';
class Ajax {
    baseUrl() {
        return 'https://jsonplaceholder.typicode.com';
    };
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl() + url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
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
                .then(data => resolve.data)
                .catch(error => reject(error))
        })
    };
}
export default new Ajax()