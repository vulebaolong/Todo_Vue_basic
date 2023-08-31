export const lcStorage = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),

    get: (key) => {
        const dataString = localStorage.getItem(key);
        let data = null;
        if (dataString !== null) data = JSON.parse(dataString);
        return data;
    },

    remove: (key) => localStorage.removeItem(key),
};