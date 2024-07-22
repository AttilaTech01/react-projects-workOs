import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { Folder, File } from '../store';

const pause = (duration: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const filesApi = createApi({
    reducerPath: 'files',
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
        addFile: builder.mutation<File, Folder>({
            query: (folder) => {
                return {
                    url: '/files',
                    body: {
                        title: faker.animal.bird(),
                        deskId: folder.id
                    },
                    method: 'POST'
                };
            }
        }),
        deleteFile: builder.mutation<void, number>({
            query: (id) => {
                return {
                    url: `/files/${id}`,
                    method: 'DELETE'
                };
            }
        }),
        fetchFiles: builder.query<File[], Folder>({
            query: (folder) => {
                return {
                    url: '/files',
                    params: {
                        folderId: folder.id
                    },
                    method: 'GET'
                };
            }
        })
    }),
});

export const { 
    useAddFileMutation,
    useDeleteFileMutation,
    useFetchFilesQuery
} = filesApi;

export { filesApi };