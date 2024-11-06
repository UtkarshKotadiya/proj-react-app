// src/components/MapSection.js
const MapSection = () => {
    return (
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
    );
};

export default MapSection;
