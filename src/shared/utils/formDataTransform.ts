import dayjs from 'dayjs';
import type { EducationInterface, ExperienceInterface, FieldsInterface } from '../interfaces/FieldsInterface';

// Convertir Dayjs → string
export const serializeFormData = (data: FieldsInterface): FieldsInterface => ({
    ...data,
    education: data.education.map((ed: EducationInterface) => ({
        ...ed,
        fromDate: typeof ed.fromDate === 'object' && 'toISOString' in ed.fromDate
            ? ed.fromDate.toISOString()
            : ed.fromDate,
        toDate: typeof ed.toDate === 'object' && 'toISOString' in ed.toDate
            ? ed.toDate.toISOString()
            : ed.toDate,
    } as unknown as EducationInterface)),
    experiences: data.experiences.map((exp: ExperienceInterface) => ({
        ...exp,
        fromDate: typeof exp.fromDate === 'object' && 'toISOString' in exp.fromDate
            ? exp.fromDate.toISOString()
            : exp.fromDate,
        toDate: typeof exp.toDate === 'object' && 'toISOString' in exp.toDate
            ? exp.toDate.toISOString()
            : exp.toDate,
    } as unknown as ExperienceInterface)),
});

// Convertir string → Dayjs
export const deserializeFormData = (data: FieldsInterface): FieldsInterface => ({
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
