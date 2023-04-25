import React from 'react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';

const images = [
      {
        original: '/static/img/categories/jhgtf.png',
      
      },
    {
        original: '/static/img/categories/soccer.png',
    },
       
      {
        original: '/static/img/categories/w.png',
       
      }
    ]

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h1 style={{display:"flex",justifyContent:"center"}}>Top Sellers</h1>
            <ImageGallery items={images}
              style={{height:300,width:300}}
            />

            {/* <div className="row">
                
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 " >
                    <div className="ps-block--category">
                        <Link href="/category/pens">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/jhgtf.png" alt="martfury" />
                        <p>Pens</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/apparel">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/soccer.png" alt="martfury" />
                        <p>Apparel</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/badge-reel-and-buddy">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/w.png" alt="martfury" />
                        <p>Badge Reel & Buddy</p>
                    </div>
                </div>
                
                
               
                
                
            </div> */}
        </div>
    </div>
);

export default HomeDefaultTopCategories;
