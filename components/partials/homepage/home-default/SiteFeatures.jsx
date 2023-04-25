import React from 'react';

const SiteFeatures = () => (
    <div className="ps-site-features">
        <div className="ps-container">
            <div className="ps-block--site-features">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-rocket"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Free Shipping</h4>
                        <p>For all oders over $</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-sync"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>90 Days Return</h4>
                        <p>If goods have problems</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-credit-card"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Secure Payment</h4>
                        <p>100% secure payment</p>
                    </div>
                </div>
               
                
            </div>
        </div>
    </div>
);

export default SiteFeatures;
