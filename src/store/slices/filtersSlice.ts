import { createSlice } from '@reduxjs/toolkit';

export interface Filter {
    label: string,
    isChecked: boolean,
    value: number | string
}

export interface filtersState {
    tabs: Array<string>,
    activeTab: number | null,
    filters: Array<Filter>
}

const initialState: filtersState = {
    tabs: ["НАЙДЕШЕВШИЙ", "НАЙШВИДШИЙ", "ОПТИМАЛЬНИЙ"],
    activeTab: null,
    filters: []
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.activeTab = action.payload
        },
        setFilters: (state, action) => {
            state.filters.push(...action.payload)
        },
        toggleFilter: (state, action) => {
            const newFiltersState = state
                .filters
                .map((filter: Filter) => ({
                    ...filter,
                    isChecked: filter.value === action.payload
                        ? !filter.isChecked
                        : filter.isChecked
                }))
            state.filters = [...newFiltersState]
        }

    },
});

export const { setTab, setFilters, toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;