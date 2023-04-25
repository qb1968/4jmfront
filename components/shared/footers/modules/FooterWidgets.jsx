import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
           
            
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Quick links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Policy</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/blank">
                        <a>Term & Condition</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Shipping</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Return</a>
                    </Link>
                </li>
              
            </ul>
        </aside>
        
        <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
                <li>
                    
                </li>
                <li>
                    <Link href="/account/checkout">
                        <a>Checkout</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>My account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Shop</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
