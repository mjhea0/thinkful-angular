# AngularJS by Example - Building a Bitcoin Investment Calculator

Angular JS is a client-side Javascript framework used for simplifying the process of developing maintainable web applications. In this tutorial we'll design a basic app that highlights much of what the framework has to offer. 

> First, before going any further, to fully understand this tutorial you need to be comfortable with *vanilla* Javascript, not just jQuery. For a crash course in Javascript, check out the Codeacademy Javascript [track](http://www.codecademy.com/tracks/javascript). 

First off, what are we building? Well, forget the overdone hello world and todo apps, let's build something more - a Bitcoin Calculator! 

This app details how much you could *potentially* profit if you invested X amount of dollars in Bitcoins. Through this tutorial, I'll walk you through the basics of designing a web app using Angular. We'll highlight many of the key features of the framework, including templating, two-way data binding, directives, and filters. 

## What is Angular?

Angular is designed for creating dynamic, [single page applications](https://en.wikipedia.org/wiki/Single-page_application) as well as full web applications within the Model View Controller (MVC) pattern (Or, more precisely: the [MVVM](http://www.dotnet-tricks.com/Tutorial/designpatterns/2FMM060314-Understanding-MVC,-MVP-and-MVVM-Design-Patterns.html) pattern).

Working within the MVC paradigm, it's easy to add/bind data to your page, which automatically updates because the framework is always watching for changes. Put another way, with Angular, we can write front-end code without having to directly manipulate the DOM. It's also easy to learn since it works directly with HTML, by simply extending its functionality. 

Before we start building, read over some of Angular's main features:

1. **[Templates](http://docs.angularjs.org/guide/templates)**: Templates reside directly in your HTML. 
2. **[Two-way data binding](http://docs.angularjs.org/guide/databinding)**: Changes to your Javascript automatically update the DOM. In other words, it doesn't require an explicit refresh.
3. **[Routing](http://docs.angularjs.org/api/ngRoute/service/$route)**: Routing represents the possible application states; controllers and templates are employed to serve this purpose.
4. **[Directives](http://docs.angularjs.org/guide/directive)**: Directives are used for extending HTML with new functionality as well as encapsulating code for easy reuse.

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
<!-- define our angular app -->
<html ng-app>
```

This simply binds or [bootstraps](https://docs.angularjs.org/guide/bootstrap) an unnamed Angular app to the DOM. Angular allows us to have multiple apps within the same HTML page, so this simple directive, [`ng-app`](http://docs.angularjs.org/api/ng/directive/ngApp), defines where each app begins and ends (scope), literally telling Angular where the app is active. In this case, since we are placing the app on the `<html>` tag as an HTML attribute, we are essentially saying, "We have one Angular app that spans the entire page". 

Just remember that you can place this directive anywhere on your page, and your app will run within that defined scope, such as a `<div>`, for example.

Finally, let's add in the *model* and get our app working:

```html
<h3>How many Bitcoins do you have?</h3>
<!-- model -->
<input type="number" ng-model="somenumber" placeholder="20">
<br><br>
<h4>You have <span class="number">{{ somenumber }}</span> Bitcoins - nice!</h4>
```

Here we are defining the directive [`ng-model`](http://docs.angularjs.org/api/ng/directive/ngModel) in the input box as `ng-model="somenumber"`. By doing so, we have bound the value within the input box to the model, so when the input value changes, Angular automatically updates the model. This is [two-way binding](http://docs.angularjs.org/guide/databinding). Get used to this concept as this is part of what makes Angular so powerful - and fun to use.

Next, by wrapping the model value, `somenumber` in double curly braces - which are used as delimiters for the results from expressions - we are simply telling Angular to replace that text with the actual value, which, again, comes from the number added to the input box. 

Here's the final code, which includes some Bootstrap styles:

```html
<!DOCTYPE html>
<!-- define our angular app -->
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

Watch what happens when you change the value in the input box. Two-way binding in action! The DOM changes with each keystroke, without the need for any code to refresh the page.

Play around with code here: [http://jsfiddle.net/mjhea0/9ear3/](http://jsfiddle.net/mjhea0/9ear3/). You can also grab the actual HTML from this [repo](https://github.com/mjhea0/thinkful-angular/tree/master/basic-app).

With the basics out of the way, let's move on and create a more robust app.

## Bitcoin Calculator

We'll be building on the same file from before. Feel free to save it as something new, or in a new directory, like - *btc-calculator/index.html*, for example.

### Module and Controller

First, let's add in a *controller* and name our Angular app:

```html
<!-- define our angular app and set the controller -->
<html ng-app="bitcoinCalculator" ng-controller="bitcoinController">
```

The [Controller](http://docs.angularjs.org/api/ng/directive/ngController), `ngController`, is a directive that will run the `bitcoinController` controller, which controls, or talks to, the view. Controllers link and provide information to the model and our view. You'll also notice that we assigned a value to our `ng-app` directive: `ng-app="bitcoinCalculator"`. This tells angular which module we'll be using in our app.

If you try the app now, you'll notice it's broken. That's because we defined a controller, but we have not defined how said controller works. Let's do that.

Add an Angular module:

```html
<!-- angular module -->
<script type="text/javascript">
  var bitcoinCalculator = angular.module('bitcoinCalculator', []);
    bitcoinCalculator.controller('bitcoinController', ['$scope', function ($scope) {
      // attaching 0 to the DOM
      $scope.somenumber = 0;
    }]);
</script>
```

Angular [modules](http://docs.angularjs.org/guide/module) are used for organizing Javascript apps/code into separate self-contained components.

Inside the modules we can add:

- controllers
- directives
- filters
- routes

In the current app:

1. `angular.module("name",[])` instantiates and returns a new module
2. `function ($scope) {$scope.somenumber = 0;}` binds the controller with the view

When Angular initializes this controller, it creates and injects the `$scope` object into the function with [dependency injection](http://docs.angularjs.org/guide/di). Don't worry if this doesn't make sense, it's a bit of Angular magic for creating and using the `$scope` object.

In this case, we are simply binding the number 0 to `somenumber` within the view.

Try your application now in the browser. It should now work.

> You do not have to assign a variable to a module for your app to work, but it is a best practice.

### Update HTML

Before moving on with more Angular, let's step back and look at the functionality of our final app: *The application we'll be developing is a Bitcoin investment calculator that details how much you could potentially profit if you invested X amount of dollars in Bitcoins.*

*What does that mean in terms of HTML structure?* Well, we need an input box for the initial investment and a table that shows IF the price of 1 BTC reaches X, THEN your starting investment would be X AND your profit is X. Let's create the HTML for that now. 

```html
<!DOCTYPE html>
<!-- define our angular app and set the controller -->
<html ng-app="bitcoinCalculator" ng-controller="bitcoinController">
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
      var bitcoinCalculator = angular.module('bitcoinCalculator', []);
        bitcoinCalculator.controller('bitcoinController', ['$scope', function ($scope) {
          // attaching 0 to the DOM
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
            <label for="starting-investment">Initial Investment (USD)</label>
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
  var bitcoinCalculator = angular.module('bitcoinCalculator', []);
    bitcoinCalculator.controller('bitcoinController', function($scope, $http){
      // calling the api, grabbing the value for USD, appending it to the dom
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
  var bitcoinCalculator = angular.module('bitcoinCalculator', []);
    bitcoinCalculator.controller('bitcoinController', function($scope, $http){
      // calling the api, grabbing the value for USD, appending it to the dom
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

I'll let you evaluate those calculations for now. We'll break one down further down. Notice how we have to pass a price into the function.

Next, go ahead and append them to the DOM, making sure to pass in a price: 

```html
<tbody>
  <tr>
    <td>1000</td>
    <td>{{ newAmt(1000) }}</td>
    <td>{{ profit(1000) }}</td> 
  </tr>
</tbody>
```

Check this out in the browser. Depending upon the current price of 1 Bitcoin, you should see:

![angular-3](https://raw.githubusercontent.com/mjhea0/thinkful-angular/master/angular-3.png)

For clarity, if we look at the first calculation, `newAmt`, let's plug in the values: `$scope.newAmt = function(1000){return 1000/563.64 * 5000;}`. Make sense?

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

As you probably guessed, the [currency](http://docs.angularjs.org/api/ng/filter/currency) filter formats a number as currency. When used, you can either define a currency, `| currency:"USD$"`, or let Angular decide which to use based on your geolocation, `| currency`.

### Model

```html
<input type="number" ng-model="initalAmt" class="form-control" placeholder="{{initalAmt}}">
```

Remember how [models](http://docs.angularjs.org/api/ng/directive/ngModel) work? Here we are binding a model called `InitialAmt` to the input form. This is a perfect example of two-way binding:

1. If we update the model, we update the view with `placeholder="{{initalAmt}}"`.
2. We can also update the view (by entering a new value in the input box), so that it updates the model, making our app dynamic.

It's circular: edit the model, and it updates the view; edit the view and it updates the model!

Test it out!

### Update HTML

Finally, update the styles and HTML structure:

```html
<!DOCTYPE html>
<!-- define our angular app and set the controller -->
<html ng-app="bitcoinCalculator" ng-controller="bitcoinController">
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
  var bitcoinCalculator = angular.module('bitcoinCalculator', []);
    bitcoinCalculator.controller('bitcoinController', function($scope, $http){
      // calling the api, grabbing the value for USD, appending it to the dom
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
            <label for="starting-investment">Initial Investment (USD)</label>
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

![angular-4](https://raw.githubusercontent.com/mjhea0/thinkful-angular/master/angular-4.png)

## Conclusion

In process ...

### Basic Conclusion

1. What did we cover
2. What features did we not cover
3. What should you have learned
4. Tie this back to the intro

### Stretch goals
1. Loop within the table
2. Add D3 table
3. What else can you do with the BitPay API?
4. E2E Testing
