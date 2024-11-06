// src/pages/About.js
import './About.css';
import StoreHistory from '../components/StoreHistory.js';
import JewelersSection from '../components/JewelerSection.js';

function About() {

    const jewelersData = [
        {
            imgSrc: `${process.env.PUBLIC_URL}/proj_imgs/j1.jpg`,
            altText: 'Mr. Frank',
            name: 'Faisal "Frank" Bashir',
            bio: 'Mr. Frank founded Paramount Jewelers and has been in the jewelry business for over two decades...',
        },
        {
            imgSrc: `${process.env.PUBLIC_URL}/proj_imgs/j2.jpg`,
            altText: 'Umar',
            name: 'Umar Bashir',
            bio: 'Umar is a skilled jeweler with a passion for creating unique and customized pieces...',
        }
    ];

    return (
        <div id="au-main-content">
            <StoreHistory/>
            <JewelersSection jewelers={jewelersData} />
        </div>
    );
}

export default About;
