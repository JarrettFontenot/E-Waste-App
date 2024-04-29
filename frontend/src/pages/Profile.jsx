import React, { useState } from 'react';
import '../styles.css';
import Header from '../components/Header';

function Profile() {
    const [contributions, setContributions] = useState(0);

    const incrementContributions = () => {
        setContributions(prevContributions => prevContributions + 1);
    };

    const decrementContributions = () => {
        setContributions(prevContributions => prevContributions - 1);
    };

    return (
        <div>
            <Header />
            <div className='Profile-Page'>
                <h1>Your Profile</h1>
                <div className='Profile-Container'>
                    <h1>Your e-waste contributions</h1>
                    <div className='Contribution-Counter'>
                        <div className='Big-Number'>{contributions}</div>
                        <div className='Plus-Sign' onClick={incrementContributions}>+</div>
                        <div className='Minus-Sign' onClick={decrementContributions}>-</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
