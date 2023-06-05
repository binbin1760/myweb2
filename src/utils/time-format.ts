import { format } from 'date-fns'

type FormatStr = 'yyyy-MM-dd HH:mm:ss' | 'yyyy-MM-dd HH:mm' | 'yyyy-MM-dd'

export function formateDate(
    date: Date | string | number,
    formatStr: FormatStr = 'yyyy-MM-dd HH:mm:ss',
) {
    return format(new Date(date), formatStr)
}