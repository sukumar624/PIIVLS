import React from 'react';
import './formvisa.css';
const FormVisa = () => {
    return (
        <div className='form_area'>
            <form action="">
                <h2 className='form_title'>Study Abroad</h2>
                <p className='form_content'>
                    Study abroad allows every student to discover and broaden their horizons. Become an adaptable global contender by Studying Abroad!
                </p>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="input_group">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" className='form-control' id='fname' />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input_group">
                            <label htmlFor="country">Select Country</label>
                            <select class="form-select" id='country'>
                                <option selected>Open this select menu</option>
                                <option value="1">India</option>
                                <option value="2">Pakistan</option>
                                <option value="3">Bangladesh</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input_group">
                            <label htmlFor="cnumber">Your Contact Number</label>
                            <input type="text" className='form-control' id='cnumber' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormVisa;