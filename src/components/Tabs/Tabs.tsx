import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import './Tabs.scss'
import { setTab } from '../../store/slices/filtersSlice'
import { applyTabFilters } from '../../store/slices/flightsSlice'

const Tabs = () => {
    const { tabs, activeTab } = useSelector((state: RootState) => state.filters)
    const dispatch = useDispatch()
    const onChangeTab = (tabIndex: number) => {
        dispatch(setTab(tabIndex))
        dispatch(applyTabFilters(tabIndex))
    }

    return (
        <div className='tabs'>
            {tabs.map((tab, index) => {
                const isActive = index === activeTab
                const modifier = isActive ? `tabs__item_active` : 'tabs__item_inactive'
                return (
                    <div key={index} onClick={() => onChangeTab(index)} className={`tabs__item ${modifier}`}>
                        {tab}
                    </div>
                )
            })}
        </div >
    )
}

export default Tabs