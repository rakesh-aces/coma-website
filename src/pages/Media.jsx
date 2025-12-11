import React from 'react';
import { FaGoogle, FaExternalLinkAlt, FaImages } from 'react-icons/fa';

const Media = () => {
    const albums = [
        {
            title: "COMA Picnic 2018",
            link: "https://photos.google.com/share/AF1QipO6XBhYkIMvy-acCaFDbdp_kgxado2GSK_tBnrNZNr7z4DmpI0t97qIgk3P1z0o7w?key=ZGhGNm1DdEZmNUFXcGN3UE5BVXotZS1lcXYzOFd3",
            color: "#34a853" // Google Green
        },
        {
            title: "Magical Evening With Gopinath Muthukad 2018",
            link: "https://photos.google.com/share/AF1QipMotAQobFz2bxk1QqpODlgmO7NhPEmxZ6j4jrJVM5_SBblLaVkx3ikyU4p2Ta4GSg?key=UndEU01jYlpPazI1NXg2d1pjVG5KM2Vmc0ZqWHRn",
            color: "#ea4335" // Google Red
        },
        {
            title: "COMA Halloween 2018",
            link: "https://photos.google.com/share/AF1QipNcmFAbL12sv7X8oRk8gDUCvHGv0lsAZnh71LSYmGKqMecM5cmWv1VzMJuZw_q7rg?key=dzM4NEZrMWcwWHRSd051Ny1XTEtSb2ZPR3l6MmRn",
            color: "#fbbc05" // Google Yellow
        }
    ];

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Media Gallery</h1>
                <p className="text-secondary">Capture the moments. View our event albums on Google Photos.</p>
            </div>

            <div className="grid grid-cols-3 gap-lg">
                {albums.map((album, index) => (
                    <div key={index} style={{
                        background: 'white',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)',
                        transition: 'transform 0.2s ease',
                        border: '1px solid var(--border-color)'
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {/* Mock Cover Area */}
                        <div style={{
                            height: '160px',
                            background: `linear-gradient(135deg, ${album.color}20 0%, ${album.color}10 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <FaImages style={{ fontSize: '3rem', color: album.color, opacity: 0.8 }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '1rem',
                                right: '1rem',
                                background: 'white',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}>
                                <FaGoogle /> Photos
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', minHeight: '3rem' }}>{album.title}</h3>
                            <a
                                href={album.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem'
                                }}
                            >
                                View Album <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Media;
