Feedback
===


Response to notes
---

1. The MVVM is soooo close to MVC, especially in this example. I added this note to the readme: *Although, this introductory tutorial focuses on the MVC paradigm, which Angular originally employed, Angular now embraces more of an [MVVM](http://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/) (Model View ViewModel) pattern - which is based on MVC. I urge you not to get caught up in the terminology or jargon. In fact, the ViewModel portion is a specialized controller. My advice: Start with thinking in terms of MVC, then move into MVVM. This will make the development process much easier.*
 > ---
 > I would avoid calling any of it jargon. At best, applied computer science is just a collection of methodologies and organizational patterns. We chose one and use it as a guideline for modeling our problem. Angular is a framework that helps you enforce one of these patterns. Although MVVM may be a derivative of MVC, it is still the official word. 
 > 

 > I would rework this and focus in on how the project will is framed by a given design pattern.
 >
 > ---
2. Great idea on renaming the controller and app. No reason to shorten to save time now when later it can make it hard to guess what those mean. Good catch. 
 > ---
 > As a developer I'm as verbose as they come, I was born to write Objective-C.
 >
 > ---
3. "ngApp is sugar for angular.bootstrap" - agreed. But I don't think there's any benefit to talking about syntactic sugar. Yes, `ngApp` is a shortcut, but does it add much to talk about http://docs.angularjs.org/api/ng/function/angular.bootstrap? I think it will just confuse people.
 > ---
 > You're right, it'd be too much to address.
 >
 > ---
4. These issues you brought up in the HTML - 
    - @expand what is an angular.module?
    - @expand explain what's going here
    - @expand what is scope, and where does 'somenumber' go?
    - Two way binding is Angular's baby, we should expand upon it whenever we can
    - @expand what does ng-model do? what is 'ng-model'?
    - Good time to address how Angular parses your html and connects to the controller and the controllers scope.
    - @expand where did somenumber come from? How is this connected to ng-model?

    I feel I've explained failry well in the actual blog post. I will add more code docs to the HTML page, but I'd rather keep the big explanations in the tutorial. If you feel that some areas need to be expanded in the tutorial itself, do let me know.
 > ---
 > Great, I think tie in is important. There are always several equally valid ways to say something. For some people it may be useful to see code comments rather than paragraphs of text. Code comments are discrete chunks of information with an acute scope, and that lends themselves to a different writing style.
 >
 > ---

5. "We've set some values on $scope, but how does that update the UI? Angular lives and dies by its digest cycle, knowing about it early is helpful. Take some time to explain what happens after $http[method] completes." Good. I could use some help here. This is probably one of the best explanations I have read for the basic hello world example: http://docs.angularjs.org/guide/scope. (Scroll to the very bottom). I agree that something needs to be said, but how in-depth should I go. I'd like to explain more at the browser event loop, then bring in how Angular modifies that - but then mostly just link to the documentation. I don't think it's super important for this example. 
 > ---
 > True enough, I often have difficulty filtering out these details in my explanations. So you're probably right to try to compress it if possible.
 >
 > ---
 
That said, two way binding and the digest cycle are vital for understanding how Angular works. I should emphasize that in the conclusion.
 > ---
 > As a beginner in anything I often feel uncomfortable if something "just happens". Anything that looks like magic is going to bite me in the ass if I don't understand it. I think that's why I focuessed on this.
 >
 > ---


Writing Style
---

I had some thoughts the first time I read the tutorial, after re-reading it I felt like mentioning the one's that stood out to me.

> Angular JS is a __powerful__ Javascript framework

- I feel adjectives editorialize, try and avoid them


> Forget the basic hello world and todo applications - let's build something more fun!

- This is good, it could be punchier for a lead, maybe something like "Forget Todo app's and Hello World's, it's time for Bitcoin!", your call, what do you think?


> __As you can tell,__ the application we'll …

- I feel like this is a lead in that could be dropped without diminishing the sentence. I think whenever that can be done it should be.


> Originally developed in 2009 by two Google employees, Angular is designed for creating dynamic, single page applications (SPAs) and full web applications within the familiar Model View Controller (MVC) paradigm.

- History is interesting, but it doesn't tell me what Angular can do for me. 
- `SPA's` acronyms are only cool among product managers and government contractors
- `familiar` sounds presumptious
- This would be a solid description if it were cut to "~~Originally developed in 2009 by two Google employees,~~ Angular is designed for creating dynamic, single page applications ~~(SPAs)~~ and full web applications within the ~~familiar~~ Model View Controller (MVC) paradigm."


> Working within the MVC paradigm, you will soon find out, how easy it is to add (or bind) data to your page, which automatically updates because the framework is always "watching" for changes.

- There's a lot going on, this should be at least three different senctences
- I found `you will soon find out` to be distracting. It would fit in a lecture, but an article has no 'sooner' or 'later', yah know?
- `(or bind)` I think parantheticals should be avoided where possible, trying rewording this, or leave it for later
- `"watching" for changes` I see that you're trying to call out special angular terminology—but, quotes not used for quoting suggests a skepticism of it's validity

> Put another way, with Angular, we can write front-end code without having to directly manipulate the DOM.

- That's a lot, I see where you're going in this paragraph, but I feel this could expand to a few sentences and be easier to digest.
 

> Angular is also very easy to learn since it works directly with HTML, simply extending its functionality.

- This an interesting way of describing Angular's templating, but I wouldn't know what this meant if I were new to the framework.

> Before we start building, __take a minute to__ read over some of Angular's main features:

- Temporal statements should be avoided, the sentence says the same thing if we drop it `Before we start building read over some of Angular's main features
 

> Templates: Templates reside right in the DOM. __No more Handlebars!__

- I may not know what Handlebars is, which would make that distracting.
- I feel it's more important to stress that you write your templates in pure HTML


> Routing: Easily associate controllers with templates

- Buries the lead, a router's goal is to represent possible application states; controllers and templates are employed to serve this purpose.


> Directives: Encapsulates templates and code for easy reuse.

- This encapsulation is just a byproduct, the goal is of a directive to write a reusable web component


> Testability: AngularJS was designed in a way your web app can be fully testable.

- This could be a controversial statement depending on who you're talking too. Angular bundles it's own testing suite because of the difficulty of hooking into the digest cycle. For example, expectations in karma e2e tests, `expect(somethingTrue())` return future objects that resolve at the end of a cycle, this fullfils their promises and causes the evaluation of their assertion `expect(somethingTrue()).toBe(true)`. So, there's really no choice, you have to use Protractor or Karma—the alernative is no test coverage. Apologies for the diatribe, but the digest cycle can add a great deal of difficulty to what can be tested easily.


I put a lot out there, I hope you find it useful.