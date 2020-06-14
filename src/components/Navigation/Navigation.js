import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p 
                    className='f3 link dim black pa3 pointer white'
                    onClick={() => onRouteChange('signin')}>Sign Out</p>
            </nav>   
        )
    } else {
        return (
            <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        className='f3 link dim black pa3 pointer white'
                        onClick={() => onRouteChange('signin')}>Sign In</p>
                    <p 
                        className='f3 link dim black pa3 pointer white'
                        onClick={() => onRouteChange('register')}>Register</p>
                </nav>     
            </div>
        )
    }
}

export default Navigation;