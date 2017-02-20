# Gourmet

## About
Gourmet is an experience-sharing platform especially design for delicious foods. The motivation of our project is due to the lack of united cuisine guidance on the internet, but exist lots of sporadic personal blogs instead. Therefore, we offer a platform for foodies to share their eating experience, and welcome people to look for cuisine on our website.

## Tools
NodeJS, ReactJS, Bootstrap, Webpack, Babel, MondoDB, Microsoft Azure VM…etc.

## Front-End Design
Visual experience is often even more important than how a great meal actually tastes. Our web UI design follows the principle of serving pleasant pictures and videos, as well as a handy and clean interface. We provide not only intriguing information but also a wonderful browsing experience. The front end of our website is implemented using ReactJS as well as Bootstrap CSS layout. App.js handles routing cases and renders components of different pages, and our design follows the spirit of React to render according to state change. Also, javascript codes are translated using Bable and bundled by Webpack.

- Navigation Bar: Includes self-designed logo, useful categories, login in button, and search button.
- Landing Page: Replaying a full-screen and appetizing video to catch users’ attention on first sight.
- Home Page: Carousel shows trending articles, and galleries provide best of chef’s choices. Galleries are rendered according to popularity of articles. Users are able to click on links and look for detail of certain authors or articles.
- Personal Page: Users are able to create and maintain their own page as a blog. Personal page contains a personal cover photo, and a list of articles as well as its excerpt. New articles can be created by clicking on the button “New Article.”
- Article Page: Where users share their eating experience, and articles are able to be edited.

## Back-End Design
Our back-end is implemented using MongoDB, and two schemas are being designed: one for articles, another for users. Api.js provides several RESTful API for front-end components, including GET, POST, PUT, and DELETE. The functions are supported by npm packages such as Express and Fetch. Also, the login function is implemented by calling Facebook API. Last but not least, the application are able to run on Microsoft Azure VM smoothly.

## Demo on Microsoft Azure VM
- Note: link may be disable after azure account running out of sponsored quota.
- Demo: http://gourmet.eastasia.cloudapp.azure.com:3000
