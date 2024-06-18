import { useEffect } from 'react'
import * as data from '../../data/db.json'
import { useDispatch, useSelector } from 'react-redux'
import { Flight, FlightsState, addFlights, applyFilters } from '../../store/slices/flightsSlice';
import { RootState } from '../../store/store';
import FlightsList from '../FlightsList/FlightsList';
import './FlightsBoard.scss'
import Tabs from '../Tabs/Tabs';
import Filters from '../Filters/Filters';
import { Filter, setFilters } from '../../store/slices/filtersSlice';
import ShowMore from '../ShowMore/ShowMore';
import { normalizeData } from '../../utils/normalizedata';
import { updateFilters } from '../../utils/updateFilters';

const defaultFilters: Filter[] = [
    { label: 'всi', value: 'all', isChecked: true },
]

const FlightsBoard = () => {
    const dispatch = useDispatch();
    const { filteredData } = useSelector((state: RootState) => state.flights);
    const { filters } = useSelector((state: RootState) => state.filters);
    const { itemsShowed } = useSelector((state: RootState) => state.pagination)

    useEffect(() => {
        //filter and update data if filter values changed
        if (filters) {
            let newFiltersState: FlightsState = {
                filteredData: []
            }
            const { data: flightsData } = data
            const normalizedData: Flight[] = normalizeData(flightsData)
            if (filters.some((item: Filter) => item.value === 'all' && item.isChecked)) {
                newFiltersState.filteredData = normalizedData
            } else {
                newFiltersState.filteredData = normalizedData.filter(flight => {
                    return filters.some((item: Filter) => flight.transfersTo.length === item.value && item.isChecked)
                })
            }

            dispatch(applyFilters(newFiltersState.filteredData))
        }

    }, [filters])

    useEffect(() => {
        //getting data from file insted of db
        const { data: rawFlightsData } = data
        const normalizedData = normalizeData(rawFlightsData)
        dispatch(addFlights(normalizedData))

        const filters: Array<Filter> = [...defaultFilters]
        filters.push(...updateFilters(normalizedData))

        dispatch(setFilters(filters))
    }, [])

    return (
        <main className="container">
            <aside className="filters">
                <Filters />
            </aside>
            <section className="content">
                <Tabs />
                <div className="content__flights">
                    {filteredData ? <FlightsList flights={filteredData.slice(0, itemsShowed)} /> : 'Loading...'}
                </div>
                <div className="content__flights-show-more">
                    {filteredData.length > 5 && itemsShowed < filteredData.length && <ShowMore />}
                </div>
            </section>
        </main>
    )
}

export default FlightsBoard