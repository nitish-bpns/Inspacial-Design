import React from 'react'
import { useLocation } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './project.module.css';
import Sugg1 from '../components/Sugg1';
import Sugg2 from '../components/Sugg2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function Project(props) {

    const location = useLocation()
    const { itemTitle, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, no, head, cdate, loc, area, category, scope } = location.state


    return (
        <div className={styles.proj}>
            <Navbar />

            <div className={styles.proj2}>

                <div className={styles.projHead}>
                    {itemTitle}
                </div>

                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    height='10rem'
                >

                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img1} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img2} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img3} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img4} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img5} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img6} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img7} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img8} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img9} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img10} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img11} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img12} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img13} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img14} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img15} alt='img' />
                    </div>
                    <div className={styles.pimg} >
                        <img className={styles.img1} src={img16} alt='img' />
                    </div>


                </Carousel >

                <br />

                <div className={styles.pdetail}>
                    <span className={styles.cdate} >
                        Description: <b>{head}</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Date of Completion: <b>{cdate}</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Locality: <b>{loc}</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Area: <b>{area}</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Category: <b>{category}</b>
                    </span>
                    <br />
                    <span className={styles.cdate}>
                        Scope of work: <b>{scope}</b>
                    </span>


                </div>

            </div>


            <div className={styles.sugges}>

                <div className={styles.suggHead}>
                    Our Projects
                </div>

                {
                    `${no}` == 1 || `${no}` == 2 || `${no}` == 3 ? <Sugg2 /> : <Sugg1 />
                }

            </div>

            <Footer />

        </div>
    )
};


export default Project;