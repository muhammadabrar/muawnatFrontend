import React from 'react';

import Index from '../comp/create_cv';
import Navbar from '../comp/navbar';
import Footer from '../comp/Footer';


const CreateCv = () => {
    return (
        <>
        <Navbar fill={true}/>
          <Index/>
<Footer/>
        </>
    );
}

export default CreateCv;
