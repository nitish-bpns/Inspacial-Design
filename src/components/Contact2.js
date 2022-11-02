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

function Contact2() {

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

            if (formData.userName && formData.contact && formData.email && formData.type && formData.area && formData.location && formData.budget && formData.timeline) {
                const response = await fetch(
                    "https://v1.nocodeapi.com/inspacialdesignweb/google_sheets/ejnwOXXMNyjErUud?tabId=client",
                    {
                        method: "post",
                        body: JSON.stringify([
                            [
                                formData.userName,
                                formData.contact,
                                formData.email,
                                formData.type,
                                formData.area,
                                formData.location,
                                formData.budget,
                                formData.timeline,
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

            <button className={styles.cont2Btn} onClick={openModal} >
                AS A CLIENT
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
                            Project Type:
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

                    <br />

                    <div className={styles.minp}>
                        <label className={styles.minp1}>
                            Project Area:
                        </label>
                        <input
                            className={styles.minp2}
                            type='text'
                            placeholder='Enter Area in SFD'
                            name='area'
                            // value={userData.resume}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
                    </div>

                    <br />

                    <div className={styles.minp}>
                        <label className={styles.minp1}>
                            Location:
                        </label>
                        <input
                            className={styles.minp2}
                            type='text'
                            placeholder='Location of Project'
                            name='location'
                            // value={userData.resume}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
                    </div>

                    <br />

                    <div className={styles.minp}>
                        <label className={styles.minp3}>
                            Budget:
                        </label>
                        <input
                            className={styles.minp4}
                            type='text'
                            name='budget'
                            // value={userData.contact}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>

                        <label className={styles.minp5}>
                            Timeline:
                        </label>
                        <input
                            className={styles.minp6}
                            type='text'
                            name='timeline'
                            placeholder='DD/MM/YYYY'
                            // value={userData.email}
                            // onChange={postUserData}
                            onChange={handleInput}
                        >
                        </input>
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


        </div >
    )
}

export default Contact2