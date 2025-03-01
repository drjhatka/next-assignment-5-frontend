"use client"
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authReducer from './features/auth/authSlice'

    const authPersistConfig = {
        key: "auth",
        storage: storage,
    };
    const rootReducer = combineReducers({
        auth: persistReducer(authPersistConfig, authReducer),
    })

    export const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }),
    });
    export const persistor = persistStore(store);
    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;