// src/components/JewelersSection.js
import Jeweler from './Jeweler';

const JewelersSection = ({ jewelers }) => {
    return (
        <div id="au-ppl-div">
            <h1>Jewelers</h1>
            <div id="au-ppl" className="columns">
                {jewelers.map((jeweler, index) => (
                    <Jeweler 
                        key={index}
                        imgSrc={jeweler.imgSrc}
                        altText={jeweler.altText}
                        name={jeweler.name}
                        bio={jeweler.bio}
                    />
                ))}
            </div>
        </div>
    );
};

export default JewelersSection;
