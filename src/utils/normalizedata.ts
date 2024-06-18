import { Flight } from "../store/slices/flightsSlice"

export const normalizeData = (flightsData: Flight[]) => {
    return flightsData.map(flight => {
        let totalHoursTime = +flight.travelToTime.split(':')[0] + +flight.travelBackTime.split(':')[0]
        let totalMinutesTime = +flight.travelToTime.split(':')[1] + +flight.travelBackTime.split(':')[1]
        if (totalMinutesTime > 60) {
            totalHoursTime++
            totalMinutesTime -= 60
        }
        const timeInMinutes = totalHoursTime * 60 + totalMinutesTime
        const totalTime = timeInMinutes  //`${totalHoursTime}:${totalMinutesTime}`;
        return { ...flight, totalTime: totalTime }
    })
}