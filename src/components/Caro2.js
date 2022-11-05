import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './caro1.module.css';
import { ProjectData2 } from './ProjectData2';
import { Link } from 'react-router-dom';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function Caro2(props) {
    return (
        <div className={styles.pdiv}>

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                // dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                textDecoration="none"
            >
                {ProjectData2.map((item, index) => {
                    return (

                        <div>
                            <Link
                                to={item.path}
                                state={{
                                    itemTitle: item.title,
                                    img1: item.img[0],
                                    img2: item.img[1],
                                    img3: item.img[2],
                                    img4: item.img[3],
                                    img5: item.img[4],
                                    img6: item.img[5],
                                    img7: item.img[6],
                                    img8: item.img[7],
                                    img9: item.img[8],
                                    img10: item.img[9],
                                    img11: item.img[10],
                                    img12: item.img[11],
                                    img13: item.img[12],
                                    img14: item.img[13],
                                    img15: item.img[14],
                                    img16: item.img[15],
                                    sugg: item.suggestion,
                                    no: item.no,

                                    head: item.head,
                                    cdate: item.cdate,
                                    loc: item.location,
                                    area: item.area,
                                    category: item.category,
                                    scope: item.desc1

                                }}
                            >
                                <div className={styles.card}>

                                    <img className={styles.caroImg} src={item.img[0]} />

                                    <span className={styles.ownHead}>
                                        <center>
                                            {item.title}
                                        </center>
                                    </span>

                                </div>
                            </Link>
                        </div>

                    );
                })}

            </Carousel>





        </div>
    )
}

export default Caro2;