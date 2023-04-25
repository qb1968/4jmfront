import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
           
            
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title" style={{fontWeight:"bold"}}>Quick links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a style={{fontWeight:"bold",color:"black"}}>Policy</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/blank">
                        <a style={{fontWeight:"bold"}}>Term & Condition</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a style={{fontWeight:"bold"}}>Shipping</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a style={{fontWeight:"bold"}}>Return</a>
                    </Link>
                </li>
              
            </ul>
        </aside>
        
        <aside className="widget widget_footer">
            <h4 className="widget-title">Business</h4>
            <ul className="ps-list--link">
                <li>
                    
                </li>
                <li>
                    <Link href="/account/checkout">
                        <a style={{fontWeight:"bold"}}>Checkout</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a style={{fontWeight:"bold"}}>My account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a style={{fontWeight:"bold"}}>Shop</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
