
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