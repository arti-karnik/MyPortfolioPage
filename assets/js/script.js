
var portfolio = [
    {
        title: "Food Feed",
        description: "FoodFeed is a web app for users that want to search for a place to eat whether it's local or in another city. Currently there are only a few default cities supported.",
        github: "https://github.com/arti-karnik/FoodFeed",
        url: "https://arti-karnik.github.io/FoodFeed/"
    },
    {
        title: "Plan My Day",
        description: "A simple day planner application that will allow the user to add events in one hour time slots.",
        github: "https://github.com/arti-karnik/PlayMyDay",
        url: "https://arti-karnik.github.io/PlayMyDay/"
    },
    {
        title: "Javascript Quizzy",
        description: "Quiz on JavaScript fundamentals that stores high scores. It have multi-choice questions to be answered in given time-limit.",
        github: "https://github.com/arti-karnik/Javascript-Quizzy",
        url: "https://arti-karnik.github.io/Javascript-Quizzy/"
    },
    {
        title: "What's my Weather!",
        description: "Application to get current and 5-day weather forecast for given city name. Searches get saved locally.",
        github: "https://github.com/arti-karnik/WhatsMyWeather",
        url: "https://arti-karnik.github.io/WhatsMyWeather/"
    },
    {
        title: "Password Generator",
        description: "This is single page web application which generates Password based on user selected criteria.",
        github: "https://github.com/arti-karnik/PasswordGenerator",
        url: "https://arti-karnik.github.io/PasswordGenerator/"
    },
    {
        title: "Technology - Stop And Blog",
        description: "Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Build this site completely from scratch and deploy it to Heroku. App will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
        github: "https://github.com/arti-karnik/Technology-StopAndBlog",
        url: "https://arcane-inlet-16342.herokuapp.com/"
    },
    {
        title: "Take My Note",
        description: "Create an application called 'Take my Notes' that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. The application’s front end has been created with hTML,CSS, Bootstrap. Application is deployed to Heroku.",
        github: "https://github.com/arti-karnik/TakeMyNote",
        url: "https://floating-woodland-77953.herokuapp.com/"
    },
    {
        title: "Event Maker",
        description: "This application allows a host to schedule an event online , in-person or an announcement for a few different types of events: Potluck & Party. Host can send invites to recipients via email, also add items that participants can contribute or gift registries they would like to bring to the event or announcement which is open for all who have access to the application. Invitees can RSVP to the event with the number of adults & kids, choose available options for potluck & gifts that they would like include. They can view all received invitations from different hosts within their account. Host can view RSVP details of participants to get a better idea of who will attend the event.",
        github: "https://github.com/arti-karnik/EventMaker",
        url: "https://serene-oasis-98788.herokuapp.com/"
    },
    {
        title: "Employee Management - Back end",
        description: "CLI application to architect and build a solution for managing a company's employees using node, inquirer, and MySQL. Able to view and manage the departments, roles, and employees in a company. Since, this is back-end only application, application walk-through is recorded and uploaded. ",
        github: "https://github.com/arti-karnik/EmployeeManagement",
        url: "https://drive.google.com/file/d/1Vsn0PkM7RM4dj7niywbXbjzd3XcmcVgd/view"
    },
    {
        title: "Team Profile Generator",
        description: "Build an application which implements Node.js command-line application to take Employee information like Name, Id, Role, school, email and Phone number. Based on information provided that takes in information, application then generates an HTML webpage that displays information for each employee. Along with this, unit test are added for each part of code and ensure that it passes. Test cases are automated and run with Jest.",
        github: "https://github.com/arti-karnik/TeamProfileGenerator",
        url: "https://drive.google.com/file/d/1WqEmenJRO8G7jjCOMQUubo7erVyA1kwz/view"
    },
    {
        title: "E-commerce back end",
        description: "Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Task is to build the back end for an e-commerce site. Configure a working Express.js API to use Sequelize to interact with a MySQL database. Since, this is back-end application, application walk-through is recorded and uploaded.",
        github: "https://github.com/arti-karnik/E-Commerce-Back-End",
        url: "https://drive.google.com/file/d/1P_LHeyXYdz-bCtFBbUG0dPZkm1z7T4Ht/view"
    },
    {
        title: "Generate Read Me",
        description: "This application is used to create ReadMe file in Github repo",
        github: "https://github.com/arti-karnik/GenerateReadeMe",
        url: ""
    }
]
$( document ).ready(function() {
    console.log( "ready!" );
});
function clicked(id){

    var title = $("#modal").find("#modal-title");
    var description = $("#modal").find("#modal-description");
    var url = $("#modal").find("#modal-url");
    url.attr("href", portfolio[id].url);

    var github = $("#modal").find("#modal-github");
    github.attr("href", portfolio[id].github);

    title.text(portfolio[id].title);
    description.text(portfolio[id].description);
}