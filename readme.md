# AngularJS by Example - Building a Bitcoin Investment Calculator

Angular JS is a powerful Javascript framework created by Google for building maintainable web applications. In this tutorial we'll design a basic app that highlights much of what the framework has to offer. 

> First, before going any further, to fully understand this tutorial you need to be comfortable with *vanilla* Javascript, not just jQuery. For a crash course in Javascript, check out the Codeacademy Javascript [track](http://www.codecademy.com/tracks/javascript). 

Forget the basic hello world and todo applications - let's build something more [fun](http://#)! 

As you can tell, the application we'll be developing is a Bitcoin investment calculator that details how much you could *potentially* profit if you invested X amount of dollars in Bitcoins. Through this tutorial, we'll walk you through the basics of designing a web app using Angular while also highlighting many of the key features of the framework, including templating, two-way data binding, and directive. 

## What is Angular?

Originally developed in 2009 by two Google employees, Angular is designed for creating dynamic, single page applications (SPAs) and full web applications within the familiar Model View Controller (MVC) paradigm:

*In Angular applications, the view is the Document Object Model (DOM), the controllers are Javascript classes, and the model data is stored in object properties.* - [AngularJS](http://www.amazon.com/AngularJS-Brad-Green/dp/1449344852)

Working within that paradigm, you will soon find out, how easy it is to add (or bind) data to your page, which automatically updates because the framework is always "watching" for changes. Put another way, with Angular, we can write front-end code without having to directly manipulate the DOM. Say goodbye to jQuery. 

Angular is also very easy to learn since it works directly with HTML, simply extending its functionality. 

Before we start building, take a minute to read over some of Angular's main features:

1. **[Templates](http://docs.angularjs.org/guide/templates)**: Templates reside right in the DOM. No more Handlebars! 
2. **[Two-way data binding](http://docs.angularjs.org/guide/databinding)**: Changes in your Javascript automatically update the DOM - and vice versa.
3. **[Routing](http://docs.angularjs.org/api/ngRoute/service/$route)**: Easily associate controllers with templates
4. **[Directives](http://docs.angularjs.org/guide/directive)**: Encapsulates templates and code for easy reuse.
5. **[Testability](http://docs.angularjs.org/guide/e2e-testing)**: AngularJS was designed in a way your web app can be fully testable.

## Basic Project

Let's start with the very basics, with a barebones HTML5 project boilerplate:

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

Save this as *index.html*.

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

Play around with code here: [http://jsfiddle.net/mjhea0/9ear3/](http://jsfiddle.net/mjhea0/9ear3/). You can also grab the actual HTML from this [repo](https://github.com/mjhea0/thinkful-angular/tree/master/basic-app).

With the basics out of the way, let's move on and create a more robust app.

## Bitcoin Calculator

We'll be building on the same file from before. Feel free to save it as something new, or in a new directory, like - *btc-calculator/index.html*, for example.

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

In this case, we are simply binding the number 0 to `somenumber` within the view.

Try your application now in the browser. It should now work.

> You do not have to assign a variable to a module for your app to work, but it is a best practice.

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
    <!-- angular module -->
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

### Update Module and Controller

Next, update our module and controller.

```html
<!-- angular module -->
<script type="text/javascript">
  var btcCalc = angular.module('btcCalc', []);
    btcCalc.controller('btcCtrl', function($scope, $http){
      $http.get("https://bitpay.com/api/rates")
      .success(function(data){
        $scope.rates = data;
        for(var i=0;i<data.length;i++){
          if (data[i].code == "USD"){
            $scope.currRate = data[i].rate;
          }
        }
      });
    });
</script>
```

Without going into too much detail, because I assume you are comfortable with Javascript, we are grabbing data from the [BitPay API](https://bitpay.com/api/rates), then grabbing the current value of a Bitcoin in USD. We assign this value to the variable `currRate`.

Let's add this to the DOM:

```html
<p>Current Price (USD): ${{currRate}}</p>
```

Now, do some basic calculations in the module:

```html
<!-- angular module -->
<script type="text/javascript">
  var btcCalc = angular.module('btcCalc', []);
    btcCalc.controller('btcCtrl', function($scope, $http){
      $http.get("https://bitpay.com/api/rates")
      .success(function(data){
        $scope.rates = data;
        for(var i=0;i<data.length;i++){
          if (data[i].code == "USD"){
            $scope.currRate = data[i].rate;
          }
        }
        $scope.initalAmt  = 5000;
        $scope.newAmt     = function(price){return price/$scope.currRate * $scope.initalAmt;}
        $scope.profit     = function(price){return price/$scope.currRate * $scope.initalAmt - $scope.initalAmt;} 
      });
    });
</script>
```

I'll let you evaluate those calculations. Notice how we have to pass a price into the function.

Next, go ahead and append them to the DOM: 

```html
<tbody>
  <tr>
    <td>1000</td>
    <td>{{ newAmt(1000) }}</td>
    <td>{{ profit(1000) }}</td> 
  </tr>
</tbody>
```

Check this out in the browser. Depending upon the current price of 1 Bitcoint, you should see:

![angular-3](https://raw.githubusercontent.com/mjhea0/thinkful-angular/master/angular-3.png)

For clarity, if we look at the first calcuation, `newAmt`, let's plug in the values: `$scope.newAmt = function(1000){return 1000/563.64 * 5000;}`. Make sense?

Add more values into the table:

```html
<tbody>
  <tr>
    <td>$1,000</td>
    <td>{{ newAmt(1000) }}</td>
    <td>{{ profit(1000) }}</td> 
  </tr>
  <tr>
    <td>$5,000</td>
    <td>{{ newAmt(5000) }}</td>
    <td>{{ profit(5000) }}</td> 
  </tr>
  <tr>
    <td>$10,000</td>
    <td>{{ newAmt(10000) }}</td>
    <td>{{ profit(10000) }}</td> 
  </tr>
  <tr>
    <td>$25,000</td>
    <td>{{ newAmt(25000) }}</td>
    <td>{{ profit(25000) }}</td> 
  </tr>
  <tr>
    <td>$50,000</td>
    <td>{{ newAmt(50000) }}</td>
    <td>{{ profit(50000) }}</td> 
  </tr>
</tbody>
```

Check to make sure that worked before moving on.

### Filters

Angular [Filters](http://docs.angularjs.org/guide/filter) are used in a number of ways, but we are going to use them to simply alter the returned output.

```
<p>Current Price (USD): {{currRate | currency }}</p>

...

<tr>
  <td>$1,000</td>
  <td>{{ newAmt(1000) | currency }}</td>
  <td>{{ profit(1000) | currency }}</td> 
</tr>
<tr>
  <td>$5,000</td>
  <td>{{ newAmt(5000) | currency }}</td>
  <td>{{ profit(5000) | currency }}</td> 
</tr>
<tr>
  <td>$10,000</td>
  <td>{{ newAmt(10000) | currency }}</td>
  <td>{{ profit(10000) | currency }}</td> 
</tr>
<tr>
  <td>$25,000</td>
  <td>{{ newAmt(25000) | currency }}</td>
  <td>{{ profit(25000) | currency }}</td> 
</tr>
<tr>
  <td>$50,000</td>
  <td>{{ newAmt(50000) | currency }}</td>
  <td>{{ profit(50000) | currency }}</td> 
</tr>
```

As you probably guessed, the [currency](http://docs.angularjs.org/api/ng/filter/currency) filter formats a number as currency. When used, you can either define a currency, `| currency:"USD$"`, or let Angular decide which to used based on your geolocation, `| currency`.

### Model

```html
<input type="number" ng-model="initalAmt" class="form-control" placeholder="{{initalAmt}}">
```

Remember how [models](http://docs.angularjs.org/api/ng/directive/ngModel) work? Here we are binding a model called `InitialAmt` the input form. This is a perfect example of two-way binding:

1. If we update the model, we update the view with `placeholder="{{initalAmt}}"`
2. We can also update the view (by entering a new value in the input box), so that it updates the model, making our app dynamic

Test it out!

### Update HTML

Finally, update the styles and HTML structure:

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
      label, table {font-size: 15px;}
      input {max-width: 200px;}
    </style>
<!-- angular module -->
<script type="text/javascript">
  var btcCalc = angular.module('btcCalc', []);
    btcCalc.controller('btcCtrl', function($scope, $http){
      $http.get("https://bitpay.com/api/rates")
      .success(function(data){
        $scope.rates = data;
        for(var i=0;i<data.length;i++){
          if (data[i].code == "USD"){
            $scope.currRate = data[i].rate;
          }
        }
        $scope.initalAmt  = 5000;
        $scope.newAmt     = function(price){return price/$scope.currRate * $scope.initalAmt;}
        $scope.profit     = function(price){return price/$scope.currRate * $scope.initalAmt - $scope.initalAmt;} 
      });
    });
</script>
  </head>
  <body>
    <div class="jumbotron">
      <div class="row">
        <div class="col-sm-12">
          <h1>Bitcoin Investment Calculator</h1>
          <br><br>
          <form role="form">
            <label for="starting-investment">Intial Investment (USD)</label>
            <input type="number" ng-model="initalAmt" class="form-control" placeholder="{{initalAmt}}">
          </form>
          <br>
          <p>Current Price (USD): <span class="number">{{currRate | currency }}</span></p>
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
                  <td>$1,000</td>
                  <td>{{ newAmt(1000) | currency }}</td>
                  <td>{{ profit(1000) | currency }}</td> 
                </tr>
                <tr>
                  <td>$5,000</td>
                  <td>{{ newAmt(5000) | currency }}</td>
                  <td>{{ profit(5000) | currency }}</td> 
                </tr>
                <tr>
                  <td>$10,000</td>
                  <td>{{ newAmt(10000) | currency }}</td>
                  <td>{{ profit(10000) | currency }}</td> 
                </tr>
                <tr>
                  <td>$25,000</td>
                  <td>{{ newAmt(25000) | currency }}</td>
                  <td>{{ profit(25000) | currency }}</td> 
                </tr>
                <tr>
                  <td>$50,000</td>
                  <td>{{ newAmt(50000) | currency }}</td>
                  <td>{{ profit(50000) | currency }}</td> 
                </tr>
              </tbody>
          </table>
          <span>* IF the price of 1 Bitcoin reaches X, THEN your starting investment becomes X AND your profit becomes X.</span>
        </div>
        <div class="col-sm-5">
          <br><br>
          <img src="img/btc.png" width="200">
        </div>
      </div>
    </div>
  </body>
</html>
```

Your final app should now look like this:

## Conclusion

Coming soon ...





