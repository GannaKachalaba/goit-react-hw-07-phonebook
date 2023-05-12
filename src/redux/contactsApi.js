import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://645b6ad6a8f9e4d6e767d5e0.mockapi.io/api/v1',
    }),
        tagTypes: ['Contact'],
        endpoints: builder => ({
            fetchContacts: builder.query({
                query: () => `/contacts`,
                providesTags: ['Contact'],
            }),
            deleteContact: builder.mutation({
                query: contactId=> ({
                    url: `/contacts/${contactId}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Contact'],  
            }),
            addContact: builder.mutation({
                query: newContact => ({
                  url: '/contacts',
                  method: 'POST',
                  body: newContact,
                }),
                invalidatesTags: ['Contacts'],
              }),
        }),
    });


export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;


