import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque velit soluta non doloribus, deserunt modi eveniet nam architecto exercitationem.</p>
            <p>Go Back To <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;