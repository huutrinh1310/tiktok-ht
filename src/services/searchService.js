import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                // gan param vao url
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
};
}

