import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import FilterItem from './Filter/Filter'
import './Filters.scss'
import Card from '../../common/Card/Card'

const cardStyles = {
    padding: '0px',
    paddingBottom: '10px'
}

const Filters = () => {
    const { filters } = useSelector((state: RootState) => state.filters)

    return (
        <Card style={cardStyles}>
            <div className='filters'>
                <p className='filters__head'>КІЛЬКІСТЬ ПЕРЕСАДОК</p>
                <ul className="filters__list">
                    {filters.map((filter, index) => {
                        return <FilterItem key={index} data={filter} />
                    })}
                </ul>
            </div>
        </Card>
    )
}

export default Filters