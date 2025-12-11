import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './Sponsors.module.css';

const sponsorsData = {
    platinum: [
        { name: 'Grange Insurance', image: '/sponsors/Grange.png' },
        { name: 'Redone', image: '/sponsors/Redone.png' },
    ],
    gold: [
        { name: 'Keller Williams', image: '/sponsors/kw.png' },
        { name: 'New York Life', image: '/sponsors/newyorklife.png' }
    ],
    silver: [
        { name: 'Awadh', image: '/sponsors/awadh.png' },
        { name: 'Best Brains', image: '/sponsors/bestbrains.png' },
        { name: 'Dev Care', image: '/sponsors/devcare.png' },
        { name: 'India Grocers', image: '/sponsors/indiagrocers.png' },
        { name: 'Max Consultant', image: '/sponsors/max_consultant.png' }
    ],
    bronze: [
        { name: 'Bhavani Foods', image: '/sponsors/bhavani.png' }
    ]
};

const Sponsors = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        if (image) setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Sponsors</h1>
                <p className="text-secondary">We thank our generous sponsors for their continued support.</p>
            </div>

            {/* Platinum Tier */}
            <div className={styles.tierSection}>
                <h2 className={`${styles.tierTitle} ${styles.platinum}`}>Platinum Sponsors</h2>
                <div className={styles.grid}>
                    {sponsorsData.platinum.map((sponsor, i) => (
                        <div key={i} className={`${styles.sponsorCard} ${styles.platinumCard}`}>
                            {sponsor.image ? (
                                <div
                                    className={`${styles.logoContainer} ${styles.clickable}`}
                                    style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
                                    onClick={() => openLightbox(sponsor.image)}
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            ) : (
                                <div className={styles.logoPlaceholder}>{sponsor.name ? sponsor.name[0] : sponsor[0]}</div>
                            )}
                            <h3>{sponsor.name || sponsor}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gold Tier */}
            <div className={styles.tierSection}>
                <h2 className={`${styles.tierTitle} ${styles.gold}`}>Gold Sponsors</h2>
                <div className={styles.grid}>
                    {sponsorsData.gold.map((sponsor, i) => (
                        <div key={i} className={`${styles.sponsorCard} ${styles.goldCard}`}>
                            {sponsor.image ? (
                                <div
                                    className={`${styles.logoContainer} ${styles.clickable}`}
                                    style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
                                    onClick={() => openLightbox(sponsor.image)}
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            ) : (
                                <div className={`${styles.logoPlaceholder} ${styles.goldLogo}`}>
                                    {sponsor.name ? sponsor.name[0] : sponsor[0]}
                                </div>
                            )}
                            <h3>{sponsor.name || sponsor}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Silver Tier */}
            <div className={styles.tierSection}>
                <h2 className={`${styles.tierTitle} ${styles.silver}`}>Silver Sponsors</h2>
                <div className={styles.grid}>
                    {sponsorsData.silver.map((sponsor, i) => (
                        <div key={i} className={`${styles.sponsorCard} ${styles.silverCard}`}>
                            {sponsor.image ? (
                                <div
                                    className={`${styles.logoContainer} ${styles.clickable}`}
                                    style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
                                    onClick={() => openLightbox(sponsor.image)}
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            ) : (
                                <div className={`${styles.logoPlaceholder} ${styles.silverLogo}`}>
                                    {sponsor.name ? sponsor.name[0] : sponsor[0]}
                                </div>
                            )}
                            <h3>{sponsor.name || sponsor}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bronze Tier */}
            <div className={styles.tierSection}>
                <h2 className={`${styles.tierTitle} ${styles.bronze}`}>Bronze Sponsors</h2>
                <div className={styles.grid}>
                    {sponsorsData.bronze.map((sponsor, i) => (
                        <div key={i} className={`${styles.sponsorCard} ${styles.bronzeCard}`}>
                            {sponsor.image ? (
                                <div
                                    className={`${styles.logoContainer} ${styles.clickable}`}
                                    style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
                                    onClick={() => openLightbox(sponsor.image)}
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            ) : (
                                <div className={`${styles.logoPlaceholder} ${styles.bronzeLogo}`}>
                                    {sponsor.name ? sponsor.name[0] : sponsor[0]}
                                </div>
                            )}
                            <h3>{sponsor.name || sponsor}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center section">
                <h3>Interested in sponsoring?</h3>
                <p style={{ margin: '1rem 0' }}>Reach out to us to learn about sponsorship opportunities.</p>
                <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className={styles.modalOverlay} onClick={closeLightbox}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeLightbox}>
                            <FaTimes />
                        </button>
                        <img src={selectedImage} alt="Sponsor Full View" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sponsors;
