import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import membersData from '../data/members.json';
import { useAuth } from '../context/AuthContext';

const MembersDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { user } = useAuth(); // Could be used to protect this page

    const filteredMembers = membersData.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Member Directory</h1>
                <p className="text-secondary">Connect with fellow community members.</p>
                {!user && (
                    <p style={{ marginTop: '1rem', color: 'var(--accent-color)', fontStyle: 'italic' }}>
                        Note: Sign in to see full member details (Mock Logic).
                    </p>
                )}
            </div>

            {/* Search */}
            <div style={{ maxWidth: '600px', margin: '0 auto 3rem', position: 'relative' }}>
                <FaSearch style={{ position: 'absolute', top: '1rem', left: '1rem', color: 'var(--text-secondary)' }} />
                <input
                    type="text"
                    placeholder="Search members by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 3rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-sm)',
                        fontSize: '1rem'
                    }}
                />
            </div>

            {/* List */}
            <div className="grid grid-cols-2 gap-md">
                {filteredMembers.map(member => (
                    <div key={member.id} style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        border: '1px solid var(--border-color)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'var(--bg-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary-color)',
                            fontSize: '1.25rem'
                        }}>
                            <FaUser />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {member.type} • Since {member.memberSince}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                                📍 {member.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredMembers.length === 0 && (
                <div className="text-center text-secondary" style={{ marginTop: '2rem' }}>
                    No members found matching your search.
                </div>
            )}
        </div>
    );
};

export default MembersDirectory;
