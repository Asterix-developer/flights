import './ShowMore.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsShowed } from '../../store/slices/paginationSlice';
import { RootState } from '../../store/store';

const ShowMore = () => {
    const dispatch = useDispatch()
    const { itemsShowed } = useSelector((state: RootState) => state.pagination)
    const onShowMore = () => {
        dispatch(setItemsShowed(itemsShowed + 5))
    }

    return (
        <div onClick={onShowMore} className='more-button'>
            Показати ще 5 квитків
        </div>
    )
}

export default ShowMore