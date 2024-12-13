import React from 'react'
import sharjahImg from '../../assets/images/sharjah.png';
import UAEImge from '../../assets/images/united-arab-emirates.png';
import PakistanImg from '../../assets/images/pakistan.png';
const Locations = () => {
    return (
        <>
            <div className="our_location_area">
                <div className="container-fluid">
                    <div className="location_wrapper">
                        <div className="single_location">
                            <div className="location_header">
                                <img src={PakistanImg} alt="" />
                                <h4>Pakistan</h4>
                            </div>
                            <div className="location_info">
                                <p>
                                    4th Floor, 16/A Commercial, Phase 6, DHA, Lahore
                                </p>
                            </div>
                        </div>
                        <div className="single_location">
                            <div className="location_header">
                                <img src={UAEImge} alt="" />
                                <h4>Dubai</h4>
                            </div>
                            <div className="location_info">
                                <p>
                                    703, 7th Floor, Bin Sougat Bldg., Salah Al Din St., Diera, Dubai
                                </p>
                            </div>
                        </div>
                        <div className="single_location">
                            <div className="location_header">
                                <img src={sharjahImg} alt="" />
                                <h4>Sharjah</h4>
                            </div>
                            <div className="location_info">
                                <p>
                                    102, 1st Floor, Al Jazeera 1 Bldg., Buhaira Corniche, Al Majaz 2, Sharjah
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locations