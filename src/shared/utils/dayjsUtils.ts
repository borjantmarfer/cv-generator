import { i18n } from "@/lang";
import dayjs, { Dayjs } from "dayjs";

const formatDate = "MMMM YYYY";

const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

export const formatDateLocalized = (date: Dayjs | undefined) => {
    const cleanLocale = i18n.getLanguage().split("-")[0];
    const formatted = dayjs(date).locale(cleanLocale).format(formatDate);
    return capitalizeFirstLetter(formatted);
};