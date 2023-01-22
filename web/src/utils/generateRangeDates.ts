import dayjs from "dayjs"
import { createPortal } from "react-dom"

export const generateRangeDates = () => {
    
    const firstDayOfTheYear = dayjs().startOf("year")

    const toDay = new Date()

    const dates = []

    let compareDate = firstDayOfTheYear

    while (compareDate.isBefore(toDay)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}