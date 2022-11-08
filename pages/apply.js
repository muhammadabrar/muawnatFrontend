import React from 'react';
import Navbar from '../comp/navbar'
import Footer from '../comp/Footer'
import ApplyComp from '../comp/apply/apply';

const Apply = () => {
      return (
            <>
            <Navbar fill={true}/>
            <div className='page'>
<ApplyComp/>

            </div>
            <Footer/>
                  
            </>
      );
}

export default Apply;
