import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div id="main-contact-content">
                <div className="columns" id="cont-top-div">
                    <div id="map-div">
                        <section id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105607.17502895597!2d-79.90612057983671!3d34.19174710000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8855641d897174dd%3A0x78d0b0d27b43a383!2sParamount%20Jewelers!5e0!3m2!1sen!2sus!4v1727063206306!5m2!1sen!2sus"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map of Paramount Jewelers"
                            ></iframe>
                        </section>
                    </div>

                    <div id="info-div" className="columns">
                        <section className="location-section">
                            <address>
                                <strong>Paramount Jewelers</strong><br />
                                2701 David H McLeod Blvd<br />
                                Florence, SC - 29501<br />
                                Phone: (843) 669-1900
                            </address>
                        </section>

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
