import { Filter } from "../store/slices/filtersSlice";
import { Flight } from "../store/slices/flightsSlice";
import { getTransferText } from "./transfers";

export const updateFilters = (data: Flight[]) => {
    const transfers: Record<string, Filter> = {}
    const filters: Array<Filter> = []
    data.forEach(flight => {
        const transfersLength = flight.transfersTo.length
        let label = getTransferText(transfersLength)
        //save to object by key to see which filters to show
        transfers[transfersLength] ?? (transfers[transfersLength] = {
            value: transfersLength,
            isChecked: false,
            label: label
        })
    })
    Object.entries(transfers).forEach(transfer => {
        filters.push(transfer[1])
    });
    return filters
}