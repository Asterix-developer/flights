import { Flight } from '../../store/slices/flightsSlice';
import './FlightCard.scss'
import Card from '../../common/Card/Card';
import FlightRow from './FlightRow/FlightRow';
//@ts-ignore
import * as images from '../../assets/logos';

export enum DIRECTION {
    FORWARD,
    BACK
}

interface cardDataProps {
    cardData: Flight;
}

const FlightCard = ({ cardData }: cardDataProps) => {
    const logo = (images as any)[cardData.logo]?.()

    return (
        <article className='flight'>
            <Card>
                <div className='flight__head'>
                    <div className='flight__price'>{`${cardData.price} $`}</div>
                    <div className='flight__logo'> {logo}</div>
                </div>

                <div className='flight__body'>
                    <FlightRow cardData={cardData} direction={DIRECTION.FORWARD} />
                    <FlightRow cardData={cardData} direction={DIRECTION.BACK} />
                </div>
            </Card>
        </article>
    )
}

export default FlightCard