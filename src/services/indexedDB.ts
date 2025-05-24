import { openDB } from 'idb';
import type { FieldsInterface } from '@/shared/interfaces/FieldsInterface';
import type { SerializedFields } from '@/shared/utils/formDataTransform';

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

export const saveFormData = async (data: SerializedFields) => {
    const db = await getDB();
    if (!data.id || data.id === '') {
        const allKeys = await db.getAllKeys(STORE_NAME);
        const numericIds = allKeys
            .map(key => typeof key === 'string' && /^\d+$/.test(key) ? Number(key) : null)
            .filter((key): key is number => key !== null);
        const nextId = numericIds.length > 0 ? Math.max(...numericIds) + 1 : 1;
        data.id = String(nextId);
    }
    await db.put(STORE_NAME, { ...data, id: data.id });
    return await db.get(STORE_NAME, data.id);
};

export const getFormData = async (): Promise<FieldsInterface | undefined> => {
    const db = await getDB();
    return await db.get(STORE_NAME, 'current');
};

export const getFormDataById = async (id: string): Promise<FieldsInterface | undefined> => {
    const db = await getDB();
    return await db.get(STORE_NAME, id);
}
