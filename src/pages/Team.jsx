import React, { useState } from 'react';
import teamData from '../data/team.json';

const Team = () => {
    const [activeTab, setActiveTab] = useState('current');

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Our Team</h1>
                <p className="text-secondary">Meet the dedicated individuals serving the community.</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center" style={{ marginBottom: '2rem', gap: '1rem' }}>
                <button
                    className={`btn ${activeTab === 'current' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab('current')}
                >
                    Executive Committee
                </button>
                <button
                    className={`btn ${activeTab === 'trustees' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab('trustees')}
                >
                    Board of Trustees
                </button>
                <button
                    className={`btn ${activeTab === 'past' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab('past')}
                >
                    Past Teams
                </button>
            </div>

            {/* Executive Committee */}
            {activeTab === 'current' && (
                <div className="grid grid-cols-3 gap-lg">
                    {teamData.executiveCommittee.map(member => (
                        <div key={member.id} className="text-center" style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            borderTop: '4px solid var(--secondary-color)'
                        }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    margin: '0 auto 1.5rem',
                                    border: '4px solid var(--bg-secondary)'
                                }}
                            />
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{member.name}</h3>
                            <div style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '0.5rem' }}>
                                {member.role}
                            </div>
                            <a href={`mailto:${member.email}`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                {member.email}
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {/* Trustees */}
            {activeTab === 'trustees' && (
                <div className="grid grid-cols-3 gap-lg">
                    {teamData.trustees.map(member => (
                        <div key={member.id} className="text-center" style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            <div style={{ marginBottom: '1rem', fontSize: '2rem' }}>🏛️</div>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{member.name}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Term: {member.term}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Past Teams */}
            {activeTab === 'past' && (
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {teamData.pastTeams.map((team, index) => (
                        <div key={index} style={{
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: '1rem',
                            borderLeft: '4px solid var(--text-secondary)',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>{team.year} Committee</h3>
                            <div className="grid grid-cols-2 gap-md" style={{ fontSize: '0.9rem', textAlign: 'left' }}>
                                <div><strong>President:</strong> {team.president}</div>
                                {team.vicePresident && <div><strong>Vice President:</strong> {team.vicePresident}</div>}
                                <div><strong>Secretary:</strong> {team.secretary}</div>
                                {team.jointSecretary && <div><strong>Joint Secretary:</strong> {team.jointSecretary}</div>}
                                <div><strong>Treasurer:</strong> {team.treasurer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Team;
