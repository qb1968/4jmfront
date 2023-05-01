import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import OurTeam from '~/components/partials/page/about-us/OurTeam';
import AboutAwards from '~/components/partials/page/about-us/AboutAwards';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'About Us',
        },
    ];
    return (
        <PageContainer footer={<FooterDefault />} title="About Us">
            <div
                className="ps-page--single"
                style={{ margin: 'auto', width: '1000px' }}>
                <img src="/static/img/bg/bio.jpg" alt="" />

                <p style={{ color: 'black', fontFamily: 'serif' }}>
                    Melissa is originally from New Jersey but moved to Maryland
                    by way of her military husband. Melissa loves the challenge
                    of creating custom designs for her clients…her knack for
                    organization and her ability to thrive under pressure helps
                    her navigate her busy schedule. Melissa has worked in
                    dentistry for 13 years, so creating custom pieces such as
                    badge reels is one of her favorite things to do. Melissa is
                    excited to bring her skill set to her customers, and
                    surrounding community. Melissa adores her veteran husband
                    and three children…she can’t get enough of them! When
                    Melissa isn’t in the dental office or working for her
                    business, this easy-going crafter tends to her 22’ x 22’
                    fruit and veggie garden. You can also find Melissa savoring
                    a cup of coffee and admiring her flower beds on the
                    weekends.
                    <p style={{ color: 'black', fontFamily: 'serif' }}>
                        Fun Fact: “I am all about a creative DIY project!"
                    </p>
                </p>
            </div>
        </PageContainer>
    );
};
export default AboutUsPage;
