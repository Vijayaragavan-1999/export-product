import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCostHeadingById, deleteAllCostHeadings } from '../../redux/slices/costHeadingSlice'
import './CostHeading.css';

export const CostHeading = () => {
    const { costHeadings } = useSelector(state => state.costHeading);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const costHeadingDeleteHandler = (id) => {
        dispatch(deleteCostHeadingById(id))
    }
    const deleteAllcostHeadings = () => {
        dispatch(deleteAllCostHeadings())
    }
    return (
        <div>
            <h2>CostHeadings</h2>
            <div className='flex-container'>
                <button onClick={() => navigate("/add")} className='edit-button'>Add</button>
                <button onClick={() => deleteAllcostHeadings()}>Delete All</button>
            </div>
            {costHeadings.length > 0 && costHeadings.map((item) => <div key={item.id}>
                <h3>{item.name}</h3>
                <div className='flex-container'>
                    <button className='edit-button'>Edit</button>
                    <button type='button' onClick={() => costHeadingDeleteHandler(item.id)} className='delete-button'>Delete</button>
                </div>
            </div>)}
        </div>
    )
}
