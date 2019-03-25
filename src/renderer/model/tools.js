const app = {

    config: {
        apiUrl: "http://localhost:3000"
    },
    storage: {
        set(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get(key) {
            const result = localStorage.getItem(key);
            if (result) {
                return JSON.parse(result);
            } else {
                return '';
            }
        },
        remove(key) {
            localStorage.removeItem(key)
        }
    }
}

export default app;