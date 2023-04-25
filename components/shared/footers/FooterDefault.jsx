import React from 'react';
import FooterWidgets from './modules/FooterWidgets';
import FooterLinks from './modules/FooterLinks';
import FooterCopyright from './modules/FooterCopyright';

const FooterDefault = () => (
    <footer className="ps-footer" style={{backgroundColor:"#d188a3a8"}}>
        <div className="container"style={{backgroundColor:"#d188a3a8"}}>
            <FooterWidgets />
           
            <FooterCopyright style={{backgroundColor:"#d188a3a8"}}/>
        </div>
    </footer>
);

export default FooterDefault;
