import { createSlice } from '@reduxjs/toolkit';

export interface Flight {
    id: string,
    "timeTo": string,
    "flightTo": string,
    "flightBack": string,
    "timeBack": string,
    "travelToTime": string,
    "travelBackTime": string,
    "transfersTo": Array<string>,
    "transfersBack": Array<string>,
    "price": string,
    "logo": string,
    "totalTime": string | number
}

export enum TABS {
    CHEAP = 0,
    FAST = 1,
    OPTIMAL = 2
}

export interface FlightsState {
    filteredData: Array<Flight>,
}

const initialState: FlightsState = {
    filteredData: [],
};

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        addFlights: (state, action) => {
            state.filteredData.push(...action.payload);
        },
        applyFilters: (state, action) => {
            state.filteredData = action.payload
            return state
        },
        applyTabFilters: (state, action) => {
            switch (action.payload) {
                case TABS.CHEAP: {
                    state.filteredData = state.filteredData.sort((a, b) => a.price > b.price ? 1 : -1)
                    return state
                }
                case TABS.FAST: {
                    state.filteredData = state.filteredData.sort((a, b) => a.totalTime > b.totalTime ? 1 : -1)
                    return state
                }
                case TABS.OPTIMAL: {
                    state.filteredData = state.filteredData.sort((a, b) => {
                        // Compare flight time
                        if (a.totalTime < b.totalTime) return -1;
                        if (a.totalTime > b.totalTime) return 1;

                        // If flight time is the same, compare number of transfers
                        if (a.transfersTo.length < b.transfersTo.length) return -1;
                        if (a.transfersTo.length > b.transfersTo.length) return 1;

                        // If both flight time and transfers are the same, compare price
                        if (a.price < b.price) return -1;
                        if (a.price > b.price) return 1;

                        return 0; // They are equal
                    })
                    return state
                }
            }
        }
    },
});

export const { addFlights, applyFilters, applyTabFilters } = flightsSlice.actions;
export default flightsSlice.reducer;
