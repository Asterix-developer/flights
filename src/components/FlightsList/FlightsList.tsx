import { Flight } from '../../store/slices/flightsSlice'
import FlightCard from '../FlightCard/FlightCard'

interface FlightsListProps {
    flights: Array<Flight>
}

const FlightsList = ({ flights }: FlightsListProps) => {

    return (
        <>
            {flights.map((flight =>
                <FlightCard key={flight.id} cardData={flight} />
            ))}
        </>
    )
}

export default FlightsList