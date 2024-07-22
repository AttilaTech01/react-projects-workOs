import { Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { desksApi } from "./apis/desksApi";
import { foldersApi } from "./apis/foldersApi";
import { filesApi } from "./apis/filesApi";
import { itemsApi } from "./apis/itemsApi";

export interface Desk {
    id: number,
    name: string
}

export interface Folder {
    id: number,
    title: string,
    deskId: number
}

export interface File {
    id: number,
    title: string,
    folderId: number
}

export interface Item {
    id: number,
    name: string,
    fileId: number
}

export const store:Store = configureStore({
    reducer: {
        [desksApi.reducerPath]: desksApi.reducer,
        [foldersApi.reducerPath]: foldersApi.reducer,
        [filesApi.reducerPath]: filesApi.reducer,
        [itemsApi.reducerPath]: itemsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(desksApi.middleware)
            .concat(foldersApi.middleware)
            .concat(filesApi.middleware)
            .concat(itemsApi.middleware)
    }
});

setupListeners(store.dispatch);

export { 
    useAddDeskMutation,
    useDeleteDeskMutation,
    useFetchDesksQuery
} from "./apis/desksApi";

export { 
    useAddFolderMutation,
    useDeleteFolderMutation,
    useFetchFoldersQuery
} from "./apis/foldersApi";

export { 
    useAddFileMutation,
    useDeleteFileMutation,
    useFetchFilesQuery
} from "./apis/filesApi";

export { 
    useAddItemMutation,
    useDeleteItemMutation,
    useFetchItemsQuery
} from "./apis/itemsApi";