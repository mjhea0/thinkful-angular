# AngularJS by Example - Building a Bitcoin Investment Calculator

Angular JS is a powerful Javascript framework created by Google for building maintainable web applications. In this tutorial we'll design a basic app that highlights much of what the framework has to offer. 

> First, before going any further, to fully understand this tutorial you need to be comfortable with *vanilla* Javascript, not just jQuery. For a crash course in Javascript, check out the Codeacademy Javascript [track](http://www.codecademy.com/tracks/javascript). 

Forget the basic hello world and todo applications - let's build something more [fun](link)! 

As you can tell, the application we'll be developing is a Bitcoin investment calculator that details how much you could *potentially* profit if you invested X amount of dollars in Bitcoins. Through this tutorial, we'll walk you through the basics of designing a web app using Angular while also highlighting many of the key features of the framework, including templating, data-binding, and routing. 

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

## Basic Project

Let's start with the very basics, starting with a bare HTML5 project boilerplate:

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
See this [link](https://github.com/mjhea0/thinkful-html#html) if you'd like to know more info about this structure. Notice how I included Angular in the page - `<script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.10/angular.min.js"></script>`. You must do this before the closing `<body>` tag.

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

Watch what happens when you change the value in the input box. Two-way binding in action!

Play around with code here: [http://jsfiddle.net/mjhea0/9ear3/](http://jsfiddle.net/mjhea0/9ear3/)

With the basics out of the way, let's move on and create a more robust app.

## Bitcoin Calculator

### Module and Controller

First, let's add in a *controller* and name our Angular app:

```html
<!-- controller logic -->
<html ng-app="btcCalc" ng-controller="btcCtrl">
```

[Controllers](http://docs.angularjs.org/api/ng/directive/ngController) are simply used to control, or talk to, the view.

If you try the app now, you'll notice it's broken. That's because we defined a controller, but we have not defined how said contoller works. Let's do that.

Add an Angular module:

```html
<!-- angular module -->
<script type="text/javascript">
  var btcCalc = angular.module('btcCalc', []);
    btcCalc.controller('btcCtrl', ['$scope', function ($scope) {
      $scope.somenumber = 0;
    }]);
</script>
```

Angular [modules](http://docs.angularjs.org/guide/module) are used for organizing Javascript apps into seperate self-contained components.

1. `angular.module("name",[])` instantiates and returns a new module
2. `function ($scope) {$scope.somenumber = 0;}` binds the contoller with the view

When Angular intitalizes this controller, it creates and injects the `$scope` object into the function with [dependency injection](http://docs.angularjs.org/guide/di). Don't worry if this doesn't make sense, it's a bit of Angular magic for creating and using the `$scope` object.

In this case, we are simply binding the number 0 to the `somenumber` within the view.

Try your application now in the browser. It should now work.

> You do not have to define a module as a function for your app to work, but it is a best practice.

### Update HTML

Before moving on with more Angular, let's step back and look at the functionality of our final app: *The application we'll be developing is a Bitcoin investment calculator that details how much you could potentially profit if you invested X amount of dollars in Bitcoins.*

*What does that mean in terms of HTML structure?* Well, we need an input box for the intial investment and a table that shows IF the price of 1 BTC reaches X, THEN your starting investment would be X AND your profit is X. Let's create the HTML for that now. 

```html
<!DOCTYPE html>
<!-- controller logic -->
<html ng-app="btcCalc" ng-controller="btcCtrl">
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
    <script type="text/javascript">
      var btcCalc = angular.module('btcCalc', []);
        btcCalc.controller('btcCtrl', ['$scope', function ($scope) {
          $scope.somenumber = 0;
        }]);
    </script>
  </head>
  <body>
    <div class="jumbotron">
      <div class="row">
        <div class="col-sm-12">
          <h1>Bitcoin Investment<br>Calculator</h1>
          <br><br>
          <form role="form">
            <label for="starting-investment">Intial Investment (USD)</label>
            <input type="number" class="form-control">
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-7">
          <br><br>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Price of 1 BTC</th>
                <th>Starting Investment</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>price</td>
                <td>new amt</td>
                <td>new profit</td> 
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-5">
          <img src="img/btc.png" width="200">
        </div>
      </div>
    </div>
  </body>
</html>
```

Check it out in your browser. It should look like this:

![angular-2](https://raw.githubusercontent.com/mjhea0/thinkful-angular/master/angular-2.png)

Nothing too exciting happening; just another input box and a table, along with more Bootstrap styles. You can grab the Bitcoin image [here](https://raw.githubusercontent.com/mjhea0/thinkful-angular/master/btc-calculator/img/btc.png).


