import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { File, Item } from '../store';

const pause = (duration: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const itemsApi = createApi({
    reducerPath: 'items',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        // DEV ONLY - fake lag time
        // Since RTQ uses the browser fetch function, we can overwrite it
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    tagTypes: ['File', 'Item'],
    endpoints: (builder) => ({
        addItem: builder.mutation<Item, File>({
            query: (file) => {
                return {
                    url: '/items',
                    body: {
                        name: faker.finance.currencyName(),
                        fileId: file.id
                    },
                    method: 'POST'
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: 'File', id: arg.id }]
        }),
        deleteItem: builder.mutation<void, number>({
            query: (id) => {
                return {
                    url: `/items/${id}`,
                    method: 'DELETE'
                };
            }
        }),
        fetchItems: builder.query<Item[], File>({
            query: (file) => {
                return {
                    url: '/items',
                    params: {
                        fileId: file.id
                    },
                    method: 'GET'
                };
            },
            providesTags: (result, error, arg) =>
                result 
                    ? [
                        ...result.map((item) => ({ type: 'Item' as const, id: item.id })),
                        { type: 'File', id: arg.id }
                    ]
                    : [{ type: 'File', id: arg.id }]
        })
    }),
});

export const { 
    useAddItemMutation,
    useDeleteItemMutation,
    useFetchItemsQuery
} = itemsApi;

export { itemsApi };