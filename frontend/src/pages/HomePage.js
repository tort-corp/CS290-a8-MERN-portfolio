import React from 'react';

function HomePage() {
    return (
        <>
                <h2>Web Development Concepts Demo Website</h2>
                
                <article id="topic4">
                    <h3>About this app</h3>
                    <p>
                        This website was created over the course of my time in CS290 Web Development class. It was created using the MERN stack. The frontend is using React.js framework to implement different components, allowing the site to update the DOM dynamically. Node.js is a JavaScript based web server. Using Express framework allows for implementing API requests to pass information between the web server and browser. The backend used MongoDB running on Atlas, which is a noSQL style database. The repair log page uses the backend to log data. The back end uses the RESTful API standard to Create, Read, Update, and Delete the information on the repair log page. 
                    </p>
                    
                </article>
                        
                </>
    );
}

export default HomePage;