// src/components/Jeweler.js
const Jeweler = ({ imgSrc, altText, name, bio }) => {
    return (
        <section className="jeweler-info">
            <img src={imgSrc} alt={altText} />
            <div className="bio">
                <h3>{name}</h3>
                <p>{bio}</p>
            </div>
        </section>
    );
};

export default Jeweler;
