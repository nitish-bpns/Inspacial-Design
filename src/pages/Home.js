import React, { useState } from 'react'
import Caro1 from '../components/Caro1'
import Caro2 from '../components/Caro2'
import Navbar from '../components/Navbar'
import styles from './home.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Contact from '../components/Contact';
import Contact2 from '../components/Contact2';
import Modal from 'react-modal';
import Footer from '../components/Footer';
import { HashLink } from 'react-router-hash-link';

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

const responsive2 = {
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

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
    },
};


function Home(props) {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }




    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = (e) => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };


    const sendData = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);

            if (formData.userName && formData.contact && formData.email && formData.message) {
                const response = await fetch(
                    "https://v1.nocodeapi.com/inspacialdesignweb/google_sheets/ejnwOXXMNyjErUud?tabId=review",
                    {
                        method: "post",
                        body: JSON.stringify([
                            [
                                formData.userName,
                                formData.contact,
                                formData.email,
                                formData.message,
                            ],
                        ]),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );


                const json = await response.json();
                console.log("Success:", JSON.stringify(json));
                setMessage("Success");
                closeModal();
                alert('Submitted successfully. We will react to you soon.')
            }

            else {
                alert(`Please fill the form.`);
            }

        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };




    return (
        <div className={styles.homePage} id='home' >
            <Navbar />

            <div className={styles.caroDiv}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1500}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >

                    <img className={styles.homeCaro} src='./../images/a.jpg' />
                    <img className={styles.homeCaro} src='./../images/b.jpg' />
                    <img className={styles.homeCaro} src='./../images/c.jpg' />

                </Carousel >
            </div>




            <div className={styles.caroText}>
                “We Believe
                Your home should tell
                your story.What you
                love most collected
                and assembled in
                one place.”
            </div>

            <div className={styles.head1} id='projects' >
                Projects
            </div>

            <Caro1 />
            <br />
            <Caro2 />

            <br />
            <br />



            <div className={styles.readBtn}>


                <div className={styles.col1} >
                    <center>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#testi">
                            <button className={styles.btn1}>
                                READ REVIEWS
                            </button>
                        </HashLink>
                    </center>
                </div>



                <div className={styles.col1} >
                    <center>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#contact">
                            <button className={styles.btn1}>
                                CONTACT US
                            </button>
                        </HashLink>
                    </center>
                </div>


                <div className={styles.col1} >
                    <center>
                        <button className={styles.btn1} onClick={openModal}>
                            WRITE REVIEWS
                        </button>
                    </center>
                </div>

            </div>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button className={styles.mclose} onClick={closeModal}>X</button>
                <div className={styles.mhead} >WRITE A REVIEW</div>


                <form onSubmit={sendData} id='blur' >

                    <div className={styles.minp}>
                        <label className={styles.minp1}>
                            Name
                        </label>
                        <input
                            className={styles.minp2}
                            type='text'
                            name='userName'
                            // value={userData.userName}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
                    </div>

                    <br />

                    <div className={styles.minp}>
                        <label className={styles.minp3}>
                            Contact No.:
                        </label>
                        <input
                            className={styles.minp4}
                            type='number'
                            name='contact'
                            // value={userData.contact}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>

                        <label className={styles.minp5}>
                            Email id:
                        </label>
                        <input
                            className={styles.minp6}
                            type='email'
                            name='email'
                            // value={userData.email}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
                    </div>

                    <br />

                    {/* <div className={styles.minp}>
                        <label className={styles.minp1}>
                            Salutation:
                        </label>
                        <input
                            className={styles.minp2}
                            type='text'
                            name='type'
                            // value={userData.subject}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
                    </div>

                    <br /> */}

                    <div className={styles.minp}>
                        <label className={styles.minp1}>
                            Message:
                        </label>
                        <textarea
                            className={styles.minp2}
                            type='textarea'
                            placeholder='Type your message'
                            row='3'
                            name='message'
                            // value={userData.message}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </textarea>
                    </div>

                    <br />

                    <center>
                        <button
                            name="submit"
                            placeholder="Submit"
                            className={styles.subBtn}
                            type='submit'
                            value="submit"
                        // onClick={submitData}
                        // onClick={openModal}
                        ><b>Submit</b></button>
                    </center>




                </form>
            </Modal>

            <br />

            <div className={styles.head1} id='gallery'>
                Gallery
            </div>

            <br />

            <center>
                <img src='./../images/gall.png' className={styles.gall1} />
            </center>

            <div className={styles.divGall}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive2}
                    ssr={true}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >


                    <img className={styles.homeCaro2} src='./../images/gall/1a.jpg' />
                    <img className={styles.homeCaro2} src='./../images/gall/2a.jpg' />
                    <img className={styles.homeCaro2} src='./../images/gall/3a.jpg' />
                    <img className={styles.homeCaro2} src='./../images/gall/1b.jpg' />
                    <img className={styles.homeCaro2} src='./../images/gall/2b.jpg' />
                    <img className={styles.homeCaro2} src='./../images/gall/3b.jpg' />


                </Carousel >
            </div>


            <div className={styles.states1} id='testi'>

                <div className={styles.statesCol}>
                    <center>
                        <span className={styles.count}>
                            3+
                        </span>
                        <br />
                        <span className={styles.countDes}>
                            Years' Experience
                        </span>
                    </center>
                </div>

                <div className={styles.statesCol}>
                    <center>
                        <span className={styles.count}>
                            20,000+
                        </span>
                        <br />
                        <span className={styles.countDes}>
                            SFT Covered
                        </span>
                    </center>
                </div>

                <div className={styles.statesCol}>
                    <center>
                        <span className={styles.count}>
                            15+
                        </span>
                        <br />
                        <span className={styles.countDes}>
                            Happy Customers
                        </span>
                    </center>
                </div>

                <div className={styles.statesCol}>
                    <center>
                        <span className={styles.count}>
                            3+
                        </span>
                        <br />
                        <span className={styles.countDes}>
                            Active Projects
                        </span>
                    </center>
                </div>


            </div>

            <br />

            <div className={styles.head1}>
                Walk through Videos
            </div>

            <div className={styles.walkv}>
                <div className={styles.walkCol}>
                    <img className={styles.walkCard} src='./../images/a.jpg'></img>

                </div>
                <div className={styles.walkCol}>
                    <img className={styles.walkCard} src='./../images/a.jpg'></img>

                </div>

            </div>


            <div className={styles.aboutSec} id='about' >
                <div className={styles.head1}>
                    About Us
                </div>
                <div className={styles.aboutCont}>
                    Inspacial design studio is a creative
                    interior design studio located in hyderabad, fulfilling its mission to “create an environment of love, live with passion and make our most exciting dreams come true”. Over 3 years, the studeo’s design and communication experts have served many clients.
                </div>

                <div className={styles.head1}>
                    Our Design Approach
                </div>
                <div className={styles.aboutCont}>
                    We create impeccable spaces that connects
                    <span className={styles.blCont}> local elements and culture </span>
                    which influences the designs and fosters simplicity. This enables preferred imperfection, story telling and personifies the process, depicting connection.
                    <span className={styles.blCont}> The work of inspacial designs</span> excites, provokes and polarises, but never fails to surprise, to celebrate and entertain.
                    Regarded by many as an anomaly in the design world, <span className={styles.blCont}>it is the mission to create an environment of love, live passion</span> and make our most <span className={styles.blCont}>
                        exciting dreams come true.</span>
                </div>
            </div>

            {/* <div className={styles.head1}>
                Testimonials
            </div> */}
            <br />
            <div className={styles.head1} id='contact'>
                Contact Us
            </div>
            <br />

            <div className={styles.cont}>
                <div className={styles.cont1}>
                    <center>
                        <Contact />
                    </center>
                </div>
                <div className={styles.cont1}>
                    <center>
                        <Contact2 />
                    </center>
                </div>

            </div>
            <br />
            <br />
            <br />

            <Footer />


        </div >
    )
}

export default Home;