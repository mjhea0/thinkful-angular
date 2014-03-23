# AngularJS by Example - Building a Bitcoin Investment Calculator

Angular JS is a powerful Javascript framework created by Google for building maintainable web applications. In this tutorial we'll design a basic app that highlights much of what the framework has to offer. 

> First, before going any further, to fully understand this tutorial you need to be comfortable with *vanilla* Javascript, not just jQuery. For a crash course in Javascript, check out the Codeacademy Javascript [track](http://www.codecademy.com/tracks/javascript). 

The application we'll be developing is a Bitcoin investment calculator that details how much you could *potentially* profit if you invested X amount of dollars in Bitcoins. Through this tutorial, we'll walk you through the basics of designing a web app using Angular while also highlighting many of the key features of the framework, including templating, data-binding, and routing. 

## What is Angular?

Originally developed in 2009 by two Google employees, Angular is designed for creating dynamic, single page applications (SPAs) and full web applications within the familiar Model View Controller (MVC) paradigm:

*In Angular applications, the view is the Document Object Model (DOM), the controllers are Javascript classes, and the model data is stored in object properties.* - Source

Working within that paradigm, you will soon find out, how easy it is to add (or bind) data to your page, which automatically updates because the framework is always "watching" for changes. Put another way, with Angular, we can write front-end code without having to directly manipulate the DOM. Say goodbye to jQuery. 

Angular is also very easy to learn since it works directly with HTML, simply extending its functionality. 

Before we start building, take a minute to read over some of Angular's main features:

1. Templates: Templates reside right in the DOM. No more Handlebars! 
2. Two-way data-binding: Changes in your Javascript automatically update the DOM - and vice versa.
3. Routing: Easily associate controllers with temapltes
4. Directives: Encapsulates templates and code for easy reuse.
5. Testability: AngularJS was designed in a way your web app can be fully testable.

## Project Setup

Let's start with the very basics, starting with a basic HTML5 project boilerplate:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bitcoin Investment Calculator</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- stylesheets -->
    <link href="http://netdna.bootstrapcdn.com/bootswatch/3.1.1/yeti/bootstrap.min.css" rel="stylesheet" media="screen">
    <!-- scripts -->
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.10/angular.min.js"></script>
  </head>
  <body>
    <h1>Bitcoin Investment<br>Calculator</h1>
  </body>
</html>
```
See this [link](https://github.com/mjhea0/thinkful-html#html) if you'd like to know more info about this structure.

Next, we'll dive right into Angular, first let's define a *scope* for our project:

```html
<!-- controller logic -->
<html ng-app>
```

This simply binds an unnamed Angular app to the DOM. Angular allows us to have multiple apps within the same HTML page, so this simple directive, [`ng-app`](http://docs.angularjs.org/api/ng/directive/ngApp), defines where each app begins and ends (scope), literally telling Angular where the app is active. In this case, since we are placing the app on the `<html>` tag, we are essentially saying, "We have one Angular app that spans the entire page". 

Just remember that you can place this directive anywhere on your page, and your app will run within that defined scope, such as a `<div>`, for example.

Finally, let's add in the *model* and get our app working:

```html
<h3>How many Bitcoins do you have?</h3>
<!-- model -->
<input type="number" ng-model="somenumber" placeholder="20">
<br><br>
<h4>You have <span class="number">{{ somenumber }}</span> Bitcoins - nice!</h4>
```

Here we are defining the directive [`ng-model`](http://docs.angularjs.org/api/ng/directive/ngModel) in the input box as `ng-model="somenumber"`. By doing so, we have bound the value within the input box to the model, so when the input value changes, Angular automatically updates the model. This is [two-way binding](http://docs.angularjs.org/guide/databinding). Get used to this concept as this is part of what makes Angular so poweful - and fun to use.

Next, by wrapping the model value, `somenumber` in double curly braces, we are simply telling Angular to replace that text with the actual value, which, again, comes from the number added to the input box. 

Here's the final code, which includes some Bootstrap styles:

```html
<!DOCTYPE html>
<!-- controller logic -->
<html ng-app>
  <head>
    <title>Bitcoin Investment Calculator</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- stylesheets -->
    <link href="http://netdna.bootstrapcdn.com/bootswatch/3.1.1/yeti/bootstrap.min.css" rel="stylesheet" media="screen">
    <!-- scripts -->
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.10/angular.min.js"></script>
    <style>
      .number {font-weight: bold;}
    </style>
  </head>
  <body>
    <div class="jumbotron">
      <h1>Bitcoin Investment<br>Calculator</h1>
      <br>
      <h3>How many Bitcoins do you have?</h3>
      <!-- model -->
      <input type="number" ng-model="somenumber" placeholder="20">
      <br><br>
      <h4>You have <span class="number">{{ somenumber }}</span> Bitcoins - nice!</h4>
    </div>
  </body>
</html>
```

Run this in your browser. You should see this:

![angular-1](https://raw.githubusercontent.com/mjhea0/thinkful-angular/master/angular-1.png)

Play around with code here: [http://jsfiddle.net/mjhea0/9ear3/](http://jsfiddle.net/mjhea0/9ear3/)

With the basics out of the, let's move on and create a more robust app.

## Bitcoin Calculator
