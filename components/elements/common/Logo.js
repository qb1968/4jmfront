import React from 'react';
import Link from 'next/link';

const Logo = ({ type }) => {
    let data;
    if (type === 'autopart') {
        data = {
            url: '/home/autopart',
            img: 'img/4jmlogo.png',
        };
    }
    else if (type === 'technology') {
        data = {
            url: '/home/technology',
            img: 'static/img/4jmlogo.png',
        };
    }
    else if (type === 'technology') {
        data = {
            url: '/home/technology',
            img: 'static/img/4jmlogo.png',
        };
    }
    else if (type === 'electronic') {
        data = {
            url: '/home/electronic',
            img: 'static/img/4jmlogo.png',
        };
    }
    else if (type === 'furniture') {
        data = {
            url: '/home/furniture',
            img: 'static/img/4jmlogo.png',
        };
    }
    else if (type === 'organic') {
        data = {
            url: '/home/organic',
            img: 'static/img/4jmlogo.png',
        };
    }
    else {
        data = {
            url: '/',
            img: '/static/img/4jmlogo.png',
        };
    }
    return (
        <Link href={data.url}>
            <a className="ps-logo">
                <img style={{ height:150,width:150}} src={data.img} alt="" />
            </a>
        </Link>
    );
};

export default Logo;
