import React from 'react';

function TopicsPage() {
    return (
        <>
                <h2>Web Development Concepts</h2>
                <nav class="article_nav">
                    <a href="#topic1" class="article_nav">Web Servers</a>
                    <a href="#topic2" class="article_nav">Frontend Design</a>
                    <a href="#topic3" class="article_nav">Optimizing images</a>
                    <a href="#topic4" class="article_nav">Cascading stylesheets</a>
                    <a href="#topic5" class="article_nav">JavaScript</a>


                </nav>
                <article id="topic1">
                    <h3>Web Servers</h3>
                    {/*<!--Explain what index means as it relates to websites and servers.-->*/}
                    <p> An <strong>index</strong> is generally the default page sent back when a <strong>GET</strong> request is made to an Apache web application or server. It is common practice to use the index.html file in the root directory of the server file structure as this index. Other web servers such as .NET platforms are able to use default.html. The school server where the website is hosted is an Apache web server. </p>
                    {/*<!--Explain what you see in the browser's Web Dev/Inspector tools. 
                        What is different about the file's details on the web server 
    versus the local computer?-->*/}
                    <p> One main difference is the absence of a favicon on the local page because there is none. The URL for the local index.html is using the file scheme. The URL is the file path to the index file. The <strong>scheme</strong> the web server is using is HTTPS. There are a lot more <strong>HTTP requests and responses</strong> on the web server than there are on the local file. The local page response header only has a content type and when it was last modified. The web server file contains all sorts of information relevant to the browser such as what version of HTTP is being used, the server type, and length. The <strong>request header</strong> similarly mirrors this, in that the local file has a lot less information than the server file. Things like cookies, encoding, and language used are in the server request. </p>
                    {/*<!--Explain why the favicon.ico file has a status 200,
                         but the main.css and main.js files do not.-->*/}
                    <p> The <strong>200</strong> status code means there was a successful response in getting the item. In this case, the favicon.ico is part of the OSU web.eng domain server, so the request was able to find it. Main.css and main.js are currently not files that exist. The request is looking for files that aren't there, so it gets a status code "404 not found." </p>
                    {/*<!--Explain the parts of the URL to your web file. What 
                        are the scheme, subdomain, host domain, and resources?-->*/}
                    <p> The server name, also known as the <strong>host domain</strong>, of my website is oregonstate.edu. There are two subdomains to the website. One is web and the other is eng. This is a normal website, so the scheme is HTTPS. The 'S' indicates it's a secure website. The resource's portion of the URL is "/~merritcl/a1-merritcl/." The folder being accessed is the a1-merritcl folder that contains the indes.html page. </p>
                </article>
                <article id="topic2">
                    <h3>Frontend Design</h3>
                    {/*<!--The concept of frontend design, in a <p> paragraph.-->*/}
                    <p>
                        <strong>Frontend design</strong> is about making the website experience function best for the users. Two areas this focuses on are the overall visual design of the site and the interactive experience for the user. Things like font, color scheme, typography, illustrations and photographs all influence the visual design. They also change how the page is navigated based on where these items appear on the site and how they draw the user's attention to certain areas to guide navigation. A big part of frontend design revolves around the concept of <strong>usability</strong>. The five "E"'s of usability are:
                    </p>
                    {/*<!--The five "E"s of usability, in a <dl> definition list that separates the 
                        topics and descriptions. -->*/}
                    <dl>
                        <dt>
                            <strong>Effective</strong>
                        </dt>
                        <dd> Helping users meet their goals, so they can end up with accurate results </dd>
                        <dt>
                            <strong>Efficiency</strong>
                        </dt>
                        <dd> Guide users so that they can preform their tasks with the least amount of steps or work. This helps users get their intended results quickly. </dd>
                        <dt>
                            <strong>Easy to navigate</strong>
                        </dt>
                        <dd> Ensure users can immediately understand how to locate the goal they are looking for and be able to remember how to achieve that goal again on subsequent tries. </dd>
                        <dt>
                            <strong>Error-free</strong>
                        </dt>
                        <dd> Avoid any accessibility or availability issues. This can be achieved by seeing how users interact with the site, finding common errors that occur. Then continuing to improve that interaction with following iterations. </dd>
                        <dt>
                            <strong>Enjoyable</strong>
                        </dt>
                        <dd> Make the site <strong>engaging</strong>. Make it fit the needs of the audience with the design intent. </dd>
                    </dl>
                    {/*<!--The purpose of page layout tags, in a <p> paragraph.-->*/}
                    <p> Being able to tell different sections apart on a web page can greatly increase the usability of the website by allowing for easier navigation and better overall experience. <strong>Page layout tags</strong> help with this by breaking the page up into separate sections like the header, footer, main, nav, section, and articles. These separations also help search engine robots and screen readers understand the areas of the page, so they can function properly. </p>
                    {/*<!--How anchors link to content and from page to page, in a <p> 
                        paragraph. Clarification: What is the conceptual difference 
                    between text anchors and navigation?--> */}
                    <p>
                        <strong>Anchor text</strong> is used to create a hyperlink to different items and is typically used in a paragraph of text. These items can include files, email addresses, locations, or anything else a URL can address. The anchor text should have information about the link's destination. It uses the href attribute to link the URL. Navigation is more of a panel of different links to another pager or a location on the current page.
                    </p>
                </article>
                <article id="topic3">
                    <h3>Optimizing images</h3>
                    {/*<!--
                        What are the 6 major specifications of images for the web?  And why?
                        Which file formats are most appropriate for photos and for line art? And why?
                -->*/}
                    <p>
                        In order to build responsive, visually appealing websites with images, it is important to optimize the images. There are several ways to optimize an image, so it preforms and looks well on a website. Starting with giving a descriptive file name of the image. This allows search engine bots to categorize it, so it will appear in the appropriate search results. Next is keeping the image size the correct dimensions for the body window. Having an image 9000px wide when the viewport only shows 600px at a time will cause the image to load very slow. On that note, reducing the file size is also significant for devices that can only display at lower resolutions. This saves on resources. Using the correct file format for the correct type of image allows for the image to be displayed efficiently. Using the correct color mode for the different types of images will allow them to be displayed as intended.
                    </p>
                    <p>
                        Line art is a minimal type of imagery that is used commonly for website logos and page design. Graphics interchange format (GIF), portable network graphics (PNG) and scalable vector graphics (SVG) file types are commonly used for these types of images. These formats are focused on very small size images that logos normally are. Photo images mainly come in Joint photographic experts group (JPG) and WebP file types. These file types help keep images smaller sizes compared to RAW photos. 
                    </p>
                </article>      
                <article id="topic4">
                    <h3>Cascading stylesheets</h3>
                    {/*<!--
                        What are the main reasons to incorporate stylesheets in websites and apps?
                        What are the 5 ways to incorporate styles? And why?
            -->*/}
                    <p>
                        HTML on its own gives a website its general layout and structure, but this can be very plain. Cascading Style Sheets (CSS) can add color and style to the words displayed. It changes how the components look, and behave to make the site more legible, usable and follow brand specific trends or requirements. 
                    </p>
                    <p>
                        There are several ways to incorporate stylesheets that allow for fine tune control over websites, as well as adding blanket statements to website elements. The main way to accomplish this is with a global stylesheet. This is a .css file that can be linked in the head of a website to share its rules site wide. CSS styles can be embedded with style tags. It can also be incorporated inline with an element to change the styling on a very specific thing. Styling can also be included in JavaScript and in JavaScript template literals. 
                    </p>
                </article>
                <article id="topic5">
                    <h3>JavaScript</h3>
                    {/*<!--                        
                            What are the main data types?
                            How are objects, arrays, and JSON used?
                            How are conditionals and loops used?
                            What is object-oriented programming?
                            What is functional programming?
        -->*/}
                    <p>
                        JavaScript is an interpreted language that was created in 1995. In this class we use modern JavaScript to process form data, order data, route content and interact with external data. JavaScript consists of primitive data types such as numbers, boolean, strings, symbols, undefined and null types. Objects are also types, but are not primitive. Objects are sets of name-value pair "properties." The properties can be manipulated with create, read update and delete operations also known as CRUD. Arrays are similar to objects in JavaScript except the property names are strings '0', '1', '2' and so on. This allows for them to be indexed similarly to how other programming language arrays work. It's important to remember though that they are still objects. JavaScript Object Notation (JSON) is a standardized way of transferring data between programs. It isn't only used by JavaScript, however. Many other programs written in different languages can use JSON for exchanging data. 
                    </p>
                    <p>
                        There are two programming paradigms that can implemented with JavaScript(and other languages) are object-oriented programming and functional programming. Functional programming mainly uses functions to break the code up into separate, smaller sections. This allows for the logic to be followed easier and allows for repeated operations without having to recode the operation every time. Object-oriented programming acts similarly, but instead of functions, it uses objects to break up smaller tasks. Objects can represent real world objects like pieces in a board game or the board itself. Included in the object is all the functionality that that object would have for the program. 
                    </p>
                </article>                      
                </>
    );
}

export default TopicsPage;