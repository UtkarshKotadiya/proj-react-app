import React from 'react';
import './Contact.css';
import LocationInfo from '../components/LocationInfo.js';
import MapSection from '../components/MapSection.js';


const Contact = () => {
    return (
        <div>
            <div id="main-contact-content">
                <div className="columns" id="cont-top-div">

                    <MapSection />
                    <div id="info-div" className="columns">

                    <LocationInfo />

                        <section>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Store Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>10AM-8PM</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>10AM-8PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>10AM-8PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>10AM-8PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>10AM-8PM</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>10AM-8PM</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>11AM-6PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>

                <div id="cont-form-div">
                    <h1>Contact Us</h1>
                    <div className="form-container">
                        <form id="contact-form">
                            <input type="hidden" name="access_key" value="b1fc4877-5f12-4e74-afe3-5149ed496035" />
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your name..." required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your email..." required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                        <div id="form-messages" className="hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
