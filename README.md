# News App  

News App is a tool used to find news artciles based on key word(s) entered by useer in the search field.

## Technologies 
* JavaScript 
* ReactJS
* TailwindCSS
* News API 


## Features

# User enters key word(s) in search field and the results of news articles are populated 

![](recording.gif)


## Installation

* Clone the repo to your local machine: 
```bash
https://github.com/acai128/news-app.git
```
* Sign up to use the [News API](https://newsapi.org/)
* Save your API key in a .env file in the root of your project directory using this format in the file: 

```bash
REACT_APP_API_KEY=[enter your API key here]
//Example: REACT_APP_API_KEY=123456
```
* Add .env file to your .gitignore file 

* Access the API key via the process.env object in the SearchBar.js file: 

```bash
//Example: process.env.REACT_APP_API_KEY
```
* Install the project's dependencies 

```bash
npm install 
```
* Run React Server 

```bash
npm start 
```

