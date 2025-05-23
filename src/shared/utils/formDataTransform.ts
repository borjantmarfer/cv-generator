import dayjs from 'dayjs';
import type { EducationInterface, ExperienceInterface, FieldsInterface } from '../interfaces/FieldsInterface';

type SerializableEducation = Omit<EducationInterface, 'fromDate' | 'toDate'> & {
    fromDate: string;
    toDate: string;
};

type SerializableExperience = Omit<ExperienceInterface, 'fromDate' | 'toDate'> & {
    fromDate: string;
    toDate: string;
};

type SerializableFieldsInterface = Omit<FieldsInterface, 'education' | 'experiences'> & {
    education: SerializableEducation[];
    experiences: SerializableExperience[];
};

// Convertir Dayjs → string
export const serializeFormData = (data: FieldsInterface): SerializableFieldsInterface => ({
    ...data,
    education: data.education.map(ed => ({
        ...ed,
        fromDate: ed.fromDate.toISOString(),
        toDate: ed.toDate.toISOString(),
    })),
    experiences: data.experiences.map(exp => ({
        ...exp,
        fromDate: exp.fromDate.toISOString(),
        toDate: exp.toDate.toISOString(),
    })),
});

// Convertir string → Dayjs
export const deserializeFormData = (data: SerializableFieldsInterface): FieldsInterface => ({
    ...data,
    education: data.education.map(ed => ({
        ...ed,
        fromDate: dayjs(ed.fromDate),
        toDate: dayjs(ed.toDate),
    })),
    experiences: data.experiences.map(exp => ({
        ...exp,
        fromDate: dayjs(exp.fromDate),
        toDate: dayjs(exp.toDate),
    })),
});
