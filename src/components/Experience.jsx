import React from 'react';

const experiences = [
    {
        company: 'Synergy',
        role: 'Software Engineering Intern',
        date: 'May - Aug 2024',
        bullets:[
            'Built and maintained form widgets (dropdowns, progress bars, time pickers, etc.) using React, Node.js, and TypeScript.',
            'Migrated legacy tests to React Testing Library for modern coverage.',
            'Used Jira, Bitbucket, and Confluence to collaborate and ship production-ready code.',
        ]
    },
    {
        company: 'RCOS',
        role: 'Software Developer',
        date: 'Jan – May 2023',
        bullets:[
            'Worked on Housing 2.0 to improve RPI’s housing app UI and roommate matching system.',
            'Implemented search-based matching algorithms in Python using 10+ user preference factors.',
        ]
    }
];

export default function Experience(){
    return(
        <section className = "bg-white py-16 px-6">
            <h2 className = "text-3xl font-bold text-pink-600 text-center mb-12"> Experience</h2>
            <div className = "max-w-4xl mx-auto space-y-8">
                {experiences.map((job, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className = "text-xl font-semibold text-gray-800">
                            {job.role} <span className = "text-gray-500"> @{job.company}</span>
                        </h3>
                        <p className = "text-sm text-gray-500 mb-4"> @{job.date}</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-base">
                            {job.bullets.map((item, i) => (
                                <li key = {i}> {item}</li>
                            ))}
                        </ul>
                    </div>
                )
            )}      
            </div>
        </section>
)};
