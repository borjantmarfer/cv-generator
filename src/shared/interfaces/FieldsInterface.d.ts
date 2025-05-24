import { Dayjs } from 'dayjs'

export interface EducationInterface {
    titulation: string
    description: string
    fromDate?: Dayjs
    toDate?: Dayjs
    stillStudying?: boolean
}

export interface ExperienceInterface {
    title: string
    description: string
    companyName: string
    fromDate?: Dayjs
    toDate?: Dayjs
    stillWorking?: boolean
}

export interface FieldsInterface {
    id?: string
    jobTitle: string
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
