import React, { useState } from 'react';
import styles from './contact.module.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Contact() {

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




    // // const Contact = () => {
    // const [userData, setUserData] = useState({
    //     userName: "",
    //     contact: "",
    //     email: "",
    //     resume: "",
    //     subject: "",
    //     message: "",
    // });

    // let name, value;
    // const postUserData = (event) => {
    //     name = event.target.name;
    //     value = event.target.value;

    //     setUserData({ ...userData, [name]: value });
    // };



    // // connect with firebase

    // const submitData = async (event) => {
    //     event.preventDefault();
    //     const { userName, contact, email, resume, subject, message } = userData;

    //     if (userName && contact && email && subject && resume && message) {


    //         const res = await fetch(
    //             "https://v1.nocodeapi.com/inspacialdesignweb/google_sheets/ejnwOXXMNyjErUud?tabId=career",
    //             {
    //                 method: "POST",
    //                 Headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     userName,
    //                     contact,
    //                     email,
    //                     resume,
    //                     subject,
    //                     message,

    //                 }),
    //             }
    //         );

    //         if (res) {
    //             setUserData({
    //                 userName: "",
    //                 contact: "",
    //                 email: "",
    //                 resume: "",
    //                 subject: "",
    //                 message: "",
    //             });
    //             alert('Data submitted successfully')
    //                 ;

    //         } else {
    //             alert(`Please fill the form.`);
    //         }
    //     } else {
    //         alert(`Please fill the form.`);
    //     }
    // };


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

            if (formData.userName && formData.contact && formData.email && formData.subject && formData.resume && formData.message) {
                const response = await fetch(
                    "https://v1.nocodeapi.com/inspacialdesignweb/google_sheets/ejnwOXXMNyjErUud?tabId=career",
                    {
                        method: "post",
                        body: JSON.stringify([
                            [
                                formData.userName,
                                formData.contact,
                                formData.email,
                                formData.subject,
                                formData.resume,
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
        <div className={styles.cont}>

            <button className={styles.cont1Btn} onClick={openModal} >
                CAREER RELATED
            </button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button className={styles.mclose} onClick={closeModal}>X</button>
                <div className={styles.mhead} >CAREER RELATED</div>


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

                    <div className={styles.minp}>
                        <label className={styles.minp1}>
                            Subject:
                        </label>
                        <input
                            className={styles.minp2}
                            type='text'
                            name='subject'
                            // value={userData.subject}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
                    </div>

                    <br />

                    <div className={styles.minp}>
                        <label className={styles.minp1}>
                            Link to resume:
                        </label>
                        <input
                            className={styles.minp2}
                            type='text'
                            placeholder='Upload the drive link'
                            name='resume'
                            // value={userData.resume}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
                    </div>

                    <br />

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


        </div>
    )
}

export default Contact