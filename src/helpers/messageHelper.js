export let messageApi;

export const setMessageApi = (api) => {
    messageApi = api;
};

export const success = (content) => {
    messageApi.open({
        type: "success",
        content,
    });
};

export const error = (content) => {
    messageApi.open({
        type: "error",
        content,
    });
};

export const warning = (content) => {
    messageApi.open({
        type: "warning",
        content,
    });
};
