import React from 'react';
import './Blogs.css';
const Blog = () => {
	return (
		<>
		<div className="col-md-4 col-12 my-lg-4">
            <div className="blog-card p-2">
                <div className="d-flex p-1 align-items-center"> 
					<img src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/11/authentication-vs-authorization.webp" className="img-fluid card-img" alt='service'/>
				</div>
                <div className="my-1"> 
                    <h4>Difference between authorization and authentication</h4>
                    <div className="short-description">
						<p>Though they sound similar, the two terms Authentication and Authorization cannot be used interchangeably and are a separate security process, especially when it comes to accessing the data. Both have entirely different concepts. The fundamental difference and the comparison between these terms are mentioned here, in this article below. Here, we have analysed the difference between authentication and authorization.</p> 
					</div>
                </div>
            </div>
        </div>
		<div className="col-md-4 col-12 my-lg-4">
            <div className="blog-card p-2">
                <div className="d-flex p-1 align-items-center"> 
					<img src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg" alt='service'/>
				</div>
                <div className="my-1"> 
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <div className="short-description">
						<p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it!</p>
						<p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.Tired of writing boring code for your backend, or can't even write it at all? Try Google Firebase. So what's Google Firebase, and why should you build your app around it?</p> 
						<p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
					</div>
                </div>
            </div>
        </div>
		<div className="col-md-4 col-12 my-lg-4">
            <div className="blog-card p-2">
                <div className="d-flex p-1 align-items-center"> 
					<img src="https://static.javatpoint.com/tutorial/firebase/images/features-of-firebase.png" className="img-fluid card-img" alt='service'/>
				</div>
                <div className="my-1"> 
                    <h4>What other services does firebase provide other than authentication</h4>
                    <div className="short-description">
						<p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.</p>
						<p>There are many services which Firebase provides, Most useful of them are:</p> 
						<ol>
							<li>Cloud Firestore</li>
							<li>Cloud Functions</li>
							<li> AuthenticationHosting</li>
							<li>Cloud Storage</li>
							<li>Google Analytics</li>
							<li>Predictions</li>
							<li>Cloud Messaging</li>
							<li>Dynamic Links</li>
							<li>Remote Config</li>
						</ol>
					</div>
                </div>
            </div>
        </div>
		</>
	);
};

export default Blog;