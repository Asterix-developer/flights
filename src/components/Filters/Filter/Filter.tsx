import React from 'react'
import { Filter, toggleFilter } from '../../../store/slices/filtersSlice';
import checkboxIcon from '../../../assets/checkbox.svg'
import checkboxIconBlue from '../../../assets/checkboxBlue.svg'
import { useDispatch } from 'react-redux';

interface FilterProps {
    data: Filter;
}

const FilterItem = ({ data }: FilterProps) => {
    const dispatch = useDispatch()

    const onCheck = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, value: number | string) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(toggleFilter(value))
    }

    return (
        <div>
            <li className='filters__list-item' onClick={(e) => onCheck(e, data.value)} >
                <input type="checkbox" id={data.label} />
                <img src={data.isChecked ? checkboxIconBlue : checkboxIcon} alt="checkbox value" />
                <label htmlFor={data.label}>{data.label}</label>
            </li>
        </div >
    )
}

export default FilterItem