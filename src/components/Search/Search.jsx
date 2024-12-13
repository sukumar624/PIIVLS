import React from 'react'
import './search.css'
const Search = () => {
    return (
        <div className='search_area_box'>
            <div className="heading">
                <h2>Study Opportunity</h2>
            </div>
            <div className="search_wrapper">
                <form action="">
                    <div className="input_group">
                        <input type="text" className='form-control' />
                    </div>
                    <button className='btn btn-danger'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search