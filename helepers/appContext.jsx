import React from 'react';
import UserContext from './userContext';

const AppContext = ({children}) => {
    return (
        
        <UserContext>
            {children}
        </UserContext>
    );
}

export default AppContext;
