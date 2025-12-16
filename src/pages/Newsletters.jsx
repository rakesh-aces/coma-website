import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCalendarAlt } from 'react-icons/fa';
import initialNewsletters from '../data/newsletters.json';

const Newsletters = () => {
    const newsletters = initialNewsletters;
    const itemsPerPage = 3;

    const [expandedId, setExpandedId] = useState(
        (newsletters.length > 0) ? newsletters[0].id : null
    );
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(newsletters.length / itemsPerPage);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsletters.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);

        // Auto-expand the first item of the new page
        const newFirstIndex = (pageNumber - 1) * itemsPerPage;
        if (newsletters[newFirstIndex]) {
            setExpandedId(newsletters[newFirstIndex].id);
        } else {
            setExpandedId(null);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleNewsletter = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Newsletters</h1>
                <p className="text-secondary">Read our latest community updates and stories.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {currentItems.map(item => (
                    <div key={item.id} style={{
                        background: 'white',
                        marginBottom: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-sm)',
                        overflow: 'hidden'
                    }}>
                        {/* Header / Clickable Area */}
                        <div
                            onClick={() => toggleNewsletter(item.id)}
                            style={{
                                padding: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                background: expandedId === item.id ? 'var(--bg-secondary)' : 'white',
                                transition: 'background 0.2s'
                            }}
                        >
                            <div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--primary-color)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {item.title}
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem'
                                }}>
                                    <FaCalendarAlt /> {item.date}
                                </div>
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                {expandedId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedId === item.id && (
                            <div style={{
                                padding: '1.5rem',
                                borderTop: '1px solid var(--border-color)',
                                lineHeight: '1.8',
                                color: 'var(--text-color)'
                            }}>
                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-md" style={{ marginTop: '2rem' }}>
                    <button
                        className="btn btn-outline"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                    >
                        Previous
                    </button>
                    <span className="flex items-center text-secondary">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="btn btn-outline"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Newsletters;
