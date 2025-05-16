import React from "react"

const skills = {
    Languages: ['Python', 'C', 'C++', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'R', 'HTML', 'CSS', 'MATLAB'],
    Frameworks: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'NumPy', 'Pandas', 'Junit'],
    Tools: ['Git', 'GitHub', 'Bitbucket', 'AWS', 'Microsoft Office'],
  };

export default function Skills(){
    return(
        <section className = "bg-white py-16 px-6">
            <h2 className = "text-3xl font-bold text-pink-600 text-center mb-12"> Skills </h2>
            <div className = "max-w-4xl mx-auto space-y-10">
                {Object.entries(skills).map(([category, items], index) =>(
                    <div key = {index}>
                        <h3 className = "text-xl font-semibold text-gray-800 mb-4"> {category}</h3>
                        <div className = "flex flex-wrap gap-2">
                            {items.map((item, i) => (
                                <span key = {i} className = "bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"> {item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}