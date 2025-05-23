// src/services/indexedDb.ts
import { openDB } from 'idb';
import type { FieldsInterface } from '@/shared/interfaces/FieldsInterface';

const DB_NAME = 'cv-generator';
const STORE_NAME = 'formData';

export const getDB = async () => {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        }
    });
};

export const saveFormData = async (data: FieldsInterface) => {
    const db = await getDB();
    await db.put(STORE_NAME, { ...data, id: 'current' });
};

export const getFormData = async (): Promise<FieldsInterface | undefined> => {
    const db = await getDB();
    return await db.get(STORE_NAME, 'current');
};
