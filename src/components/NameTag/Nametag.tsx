import React from 'react';
import './Nametag.css';

const NameTag = () => {
    return (
        <div className="name-tag">
            <div className="name-tag-header">
                <h1>
                Hello !!
                </h1>
                <p>
                My name is xxx
                </p>
            </div>
            <section className="name-tag-main">
                <p>[Your name goes here]</p>
            </section>
            <footer className="name-tag-footer">

            </footer>
        </div>
    )

    
}

export default NameTag;