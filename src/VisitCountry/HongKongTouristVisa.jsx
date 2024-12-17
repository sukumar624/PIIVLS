import React from 'react'
import { GoDot, GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const HongKongTouristVisa = () => {
    return (
        <div className="container">
            <h2>Hong Kong Tourist Visa</h2>
            <p>Hong Kong has always been a tourist hotspot owing to its many tourist attractions. Most tourists are not required to apply for a visa to visit Hong Kong.</p>

            <p>Citizens of 170 countries are required to fill a landing slip once they arrive in the country which will include the conditions and limits of their stay. India is included in the list of countries.</p>

            <h4>Pre-arrival Registration</h4>

            <p>Citizens of these countries will have to fill in a pre-arrival registration form before entering the country. With this they can stay up to 14 days in the country. If you apply for this, you can avoid wasting hours in the airport waiting to fill out the landing slip. By paying a small fee, you will be able to enter Hong Kong quickly and stress free.</p>

            <p>This registration can be done online, the documents required are:</p>

            <ul>
                <li>
                    <GoDotFill />
                    <p>
                        Passport which is valid for at least 6 months from the date of arrival in Hong Kong.
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        Valid e-mail address
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>Approved means of payment</p>
                </li>
            </ul>

            <h5>Processing Time</h5>

            <p>Standard processing – You will get your notification slip in 2 days, and you will be charged USD 20.00.</p>

            <p>Rush processing _ this will take 36 hours for processing and you need to pay USD 50.00.</p>

            <p>Super Rush processing – this is the fastest option and it takes only 24 hours to receive the registration notification slip, but you will need to pay USD 70.00.</p>

            <p>This pre-arrival registration is valid for six months and can be used to enter Hong Kong for tourism purposes.</p>

            <h5>How Can  PIIVLS Help You?</h5>

            <ul>
                <li>
                    <GoDotFill />
                    <p>
                        Advise you on the required documentation
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>Fill out the application forms</p>
                </li>
                <li>
                    <GoDotFill />
                    <p>Review your documents for application  </p>
                </li>
            </ul>
        </div>
    )
}

export default HongKongTouristVisa