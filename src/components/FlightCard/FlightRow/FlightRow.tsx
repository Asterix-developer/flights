import { useEffect, useState } from 'react'
import { Flight } from '../../../store/slices/flightsSlice';
import { getTransferText } from '../../../utils/transfers';
import { DIRECTION } from '../FlightCard';

interface cardDataProps {
    cardData: Flight,
    direction: DIRECTION
}

const FlightRow = ({ cardData, direction }: cardDataProps) => {
    const [transferText, setTransferText] = useState('')

    useEffect(() => {
        const transfersLength = cardData.transfersTo.length
        const text = getTransferText(transfersLength);
        setTransferText(text);
    }, [cardData])

    return (
        <div className='flight__body-row'>
            <div className='flight__body-item'>
                <div className='flight__body-name'>
                    {direction === DIRECTION.FORWARD ? cardData.flightTo : cardData.flightBack}
                </div>
                <div className='flight__body-data'>
                    {direction === DIRECTION.FORWARD ? cardData.timeTo : cardData.timeBack}
                </div>
            </div>
            <div className='flight__body-item'>
                <div className='flight__body-name'>
                    В ДОРОЗІ
                </div>
                <div className='flight__body-data'>
                    {direction === DIRECTION.FORWARD ? cardData.travelToTime : cardData.travelBackTime}
                </div>
            </div>
            <div className='flight__body-item'>
                <div className='flight__body-name'>
                    {transferText.toUpperCase()}
                </div>
                <div className='flight__body-data'>
                    {direction === DIRECTION.FORWARD ? cardData.transfersTo.join(', ') : cardData.transfersBack.join(', ')}
                </div>
            </div>
        </div>
    )
}

export default FlightRow