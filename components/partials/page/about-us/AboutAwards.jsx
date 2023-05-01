import React, { Component } from 'react';

import Slider from 'react-slick';
import Link from 'next/link';

class AboutAwards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <div className="ps-about-awards">
                <div className="container">
                    <div className="ps-section__header">
                        <h4></h4>
                        <p>
                           Melissa is originally from New Jersey but moved to Maryland by way of her military husband. 
Melissa loves the challenge of creating custom designs for her clients…her knack for organization and her ability to thrive under pressure helps her navigate her busy schedule. Melissa has worked in dentistry for 13 years, so creating custom pieces such as badge reels is one of her favorite things to do.  Melissa is excited to bring her skill set to her customers, and surrounding community. 
Melissa adores her veteran husband and three children…she can’t get enough of them! When Melissa isn’t in the dental office or working for her business, this easy-going crafter tends to her 22’ x 22’ fruit and veggie garden. You can also find Melissa savoring a cup of coffee and admiring her flower beds on the weekends. 

<p>Fun Fact: “I am all about a creative DIY project!"</p>
                        </p>
                    </div>
                    <div className="ps-section__content">
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutAwards;
