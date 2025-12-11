import { useState } from 'react';
import eventsData from '../data/events.json';
import TicketModal from '../components/payment/TicketModal';
import styles from './Events.module.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleBuyTicket = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Upcoming Events</h1>
                <p className="text-secondary">Join us for our upcoming community gatherings and celebrations.</p>
            </div>

            <div className={styles.eventsGrid}>
                {eventsData.map(event => (
                    <div key={event.id} className={styles.eventCard}>
                        <div className={styles.eventImage}>
                            {/* Fallback pattern since we don't have real images yet */}
                            <div className={styles.imagePlaceholder} data-event={event.id}>
                                <span>{event.title[0]}</span>
                            </div>
                        </div>
                        <div className={styles.eventContent}>
                            <div className={styles.dateTag}>
                                {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </div>
                            <h3 className={styles.eventTitle}>{event.title}</h3>

                            <div className={styles.eventInfo}>
                                <p><FaCalendarAlt className={styles.icon} /> {new Date(event.date).toLocaleDateString()}</p>
                                <p><FaClock className={styles.icon} /> {event.time}</p>
                                <p><FaMapMarkerAlt className={styles.icon} /> {event.location}</p>
                            </div>

                            <p className={styles.description}>{event.description}</p>

                            <div className={styles.footer}>
                                <span className={styles.price}>${event.price}</span>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleBuyTicket(event)}
                                >
                                    Buy Tickets
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedEvent && (
                <TicketModal event={selectedEvent} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Events;
