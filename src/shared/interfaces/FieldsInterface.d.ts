import { Dayjs } from 'dayjs'

export interface EducationInterface {
    titulation: string
    description: string
    fromDate: Dayjs
    toDate: Dayjs
}

export interface ExperienceInterface {
    title: string
    description: string
    companyName: string
    fromDate: Dayjs
    toDate: Dayjs
}

export interface FieldsInterface {
    id?: string
    img: string
    fullName: string
    phone: string
    email: string
    address: string
    about: string
    education: EducationInterface[]
    skills: string[]
    experiences: ExperienceInterface[]
    mainColor: string
}
