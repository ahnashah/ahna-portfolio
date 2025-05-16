import React from "react"

const projects = [
    {
        name: 'Lexicon',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description:[
            'Built a turn-based word game called “Capitals” using javascript.',
            'Led Agile sprints with user stories and test plans.',
            'Used the State pattern and SOLID principles for clean game logic.'],
        link: null,
    },
    {
        name: 'Wordle',
        tech: ['C'],
        description:[
            'Rebuilt Wordle with a multi-threaded TCP server.',
            'Supported multiple concurrent clients and live game state.',
            'Used object-oriented principles and custom protocol handling.',],
        link: null,
    },
    {
        name: 'Fashion MNIST k-NN Classifier',
        tech: ['Python', 'NumPy', 'scikit-learn'],
        description:[  
            'Implemented a k-nearest neighbors (k-NN) classifier on Fashion MNIST.',
            'Preprocessed and normalized 28×28 grayscale images.',
            'Tuned hyperparameters and evaluated with accuracy metrics and confusion matrix.',],
        link: null,
    },
    {
        name: 'CNN-Based Background Scene Classification',
        tech: ['PyTorch', 'Google Colab', 'Python'],
        description:[
            'Developed a CNN to classify background scenes into five categories.',
            'Processed and split image datasets using custom PyTorch Dataset objects.',
            'Used early stopping, plotted training metrics, and evaluated model with per-class accuracy and confusion matrix.',],
        link: null,
    },
    {
        name: 'Biodegradability Classification',
        tech: ['R'],
        description:[
            'Built logistic regression and LDA models to classify compound biodegradability.',
            'Applied Lasso and Boruta feature selection for generalization.',
            'Achieved AUC of 0.914; submitted final models to a Codabench competition.',],
        link: "https://github.com/ahnashah/Biodegradability-Classification",
    },
    {
        name: 'Independent Motion Detection with Optical Flow',
        tech: ['Python', 'OpenCV'],
        description:[
            'Used Shi-Tomasi and Lucas-Kanade optical flow to estimate motion vectors.',
            'Estimated camera FOE and isolated independent motion using two-stage RANSAC.',
            'Clustered outlier vectors to detect moving objects in varying scenes.',],
        link: null,
    },

];

export default function Projects(){
    return(
        <section className = "bg-gray-50 py-16 px-6">
            <h2 className = "text-3xl font-bold text-pink-600 text-center mb-12"> Projects</h2>
            <div className = "grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
                {projects.map((proj,index) => (
                    <div key = {index} className = "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className = "text-xl font-semibold text-gray-800"> {proj.name}</h3>
                        <div className = "flex flex-wrap gap-2 mb-4">
                            {proj.tech.map((tech,i) => (
                                <span key = {i} className = "bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium"> {tech}</span>
                            ))}
                        </div>
                        <ul className = "list-disc list-inside space-y-1 text-gray-700 text-base">
                            {proj.description.map((item, i) => (
                                <li key = {i}> {item}</li>))}
                        </ul>
                        {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-500 underline">View Project</a>)}
                    </div>
                ))}
            </div>

        </section>
    )

};