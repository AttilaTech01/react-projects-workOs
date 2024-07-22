import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { Desk, Folder } from '../store';

const pause = (duration: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const foldersApi = createApi({
    reducerPath: 'folders',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        // DEV ONLY - fake lag time
        // Since RTQ uses the browser fetch function, we can overwrite it
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        addFolder: builder.mutation<Folder, Desk>({
            query: (desk) => {
                return {
                    url: '/folders',
                    body: {
                        title: faker.animal.type(),
                        deskId: desk.id
                    },
                    method: 'POST'
                };
            }
        }),
        deleteFolder: builder.mutation<void, number>({
            query: (id) => {
                return {
                    url: `/folders/${id}`,
                    method: 'DELETE'
                };
            }
        }),
        fetchFolders: builder.query<Folder[], Desk>({
            query: (desk) => {
                return {
                    url: '/folders',
                    params: {
                        deskId: desk.id
                    },
                    method: 'GET'
                };
            }
        })
    }),
});

export const { 
    useAddFolderMutation,
    useDeleteFolderMutation,
    useFetchFoldersQuery
} = foldersApi;

export { foldersApi };