import dayjs from 'dayjs';
import type { EducationInterface, ExperienceInterface, FieldsInterface } from '../interfaces/FieldsInterface';

// Convertir Dayjs → string
type SerializedEducation = Omit<EducationInterface, 'fromDate' | 'toDate'> & { fromDate: string | null; toDate: string | null };
type SerializedExperience = Omit<ExperienceInterface, 'fromDate' | 'toDate'> & { fromDate: string | null; toDate: string | null };
export type SerializedFields = Omit<FieldsInterface, 'education' | 'experiences'> & {
    education: SerializedEducation[];
    experiences: SerializedExperience[];
};

export const serializeFormData = (data: FieldsInterface): SerializedFields => ({
    ...data,
    education: data.education.map((ed: EducationInterface) => ({
        ...ed,
        fromDate: ed.fromDate
            ? dayjs.isDayjs(ed.fromDate) && ed.fromDate.isValid()
                ? ed.fromDate.toDate().toISOString()
                : typeof ed.fromDate === 'string'
                    ? ed.fromDate
                    : null
            : null,
        toDate: ed.toDate
            ? dayjs.isDayjs(ed.toDate) && ed.toDate.isValid()
                ? ed.toDate.toDate().toISOString()
                : typeof ed.toDate === 'string'
                    ? ed.toDate
                    : null
            : null,
    })),
    experiences: data.experiences.map((exp: ExperienceInterface) => ({
        ...exp,
        fromDate: exp.fromDate
            ? dayjs.isDayjs(exp.fromDate) && exp.fromDate.isValid()
                ? exp.fromDate.toDate().toISOString()
                : typeof exp.fromDate === 'string'
                    ? exp.fromDate
                    : null
            : null,
        toDate: exp.toDate
            ? dayjs.isDayjs(exp.toDate) && exp.toDate.isValid()
                ? exp.toDate.toDate().toISOString()
                : typeof exp.toDate === 'string'
                    ? exp.toDate
                    : null
            : null,
    })),
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
