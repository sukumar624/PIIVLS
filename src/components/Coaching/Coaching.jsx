import React from 'react'
import './coaching.css'
import { Link } from 'react-router-dom';
import coachingImg from '../../assets/images/coaching-img.jpg';
import { coachingPrograms } from './coachingPrograms';
const Coaching = () => {
    return (
        <div className='coaching_page_area'>
            <div className="coaching_img">
                <img src={coachingImg} className='img-fluid' alt="" />
            </div>
            <div className="coaching_info">
                <h2>Coaching</h2>
                <p>World class coaching program to meet your needs</p>
                <ul>
                    {coachingPrograms.map((program) => (
                        <li key={program.path}>
                            <Link to={`/coaching/${program.path}`}>{program.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Coaching;
