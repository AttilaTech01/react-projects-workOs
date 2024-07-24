import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { Desk } from '../store';

const pause = (duration: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const desksApi = createApi({
    reducerPath: 'desks',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        // DEV ONLY - fake lag time
        // Since RTQ uses the browser fetch function, we can overwrite it
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    tagTypes: ['Desk'],
    endpoints: (builder) => ({
        addDesk: builder.mutation<Desk, void>({
            query: () => {
                return {
                    url: '/desks',
                    body: {
                        name: faker.airline.airline().name
                    },
                    method: 'POST'
                };
            },
            invalidatesTags: [{ type: 'Desk', id: 'REFRESH' }]
        }),
        deleteDesk: builder.mutation<void, number>({
            query: (id) => {
                return {
                    url: `/desks/${id}`,
                    method: 'DELETE'
                };
            }
        }),
        fetchDesks: builder.query<Desk[], void>({
            query: () => {
                return {
                    url: '/desks',
                    method: 'GET'
                };
            },
            providesTags: (result) => 
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Desk' as const, id })),
                        { type: 'Desk', id: 'REFRESH' },
                    ]
                    : [{ type: 'Desk', id: 'REFRESH' }],
        })
    }),
});

export const { 
    useAddDeskMutation,
    useDeleteDeskMutation,
    useFetchDesksQuery
} = desksApi;

export { desksApi };