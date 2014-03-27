1. The MVVM is soooo close to MVC, especially in this example. I added this note to the readme: *Although, this introductory tutorial focuses on the MVC paradigm, which Angular originally employed, Angular now embraces more of an [MVVM](http://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/) (Model View ViewModel) pattern - which is based on MVC. I urge you not to get caught up in the terminology or jargon. In fact, the ViewModel portion is a specialized controller. My advice: Start with thinking in terms of MVC, then move into MVVM. This will make the development process much easier.*
2. Great idea on renaming the controller and app. No reason to shorteb to save time now when later it can make it hard to guess what those mean. Good catch. 
3. "ngApp is sugar for angular.bootstrap" - agreed. But I don't think there's any benefit to talking about syntactic sugar. Yes, `ngApp` is a shortcut, but does it add much to talk about http://docs.angularjs.org/api/ng/function/angular.bootstrap? I think it will just confuse people.
4. These issues you brought up in the HTML - 

    - @expand what is an angular.module?
    - @expand explain what's going here
    - @expand what is scope, and where does 'somenumber' go?
    - Two way binding is Angular's baby, we should expand upon it whenever we can
    - @expand what does ng-model do? what is 'ng-model'?
    - Good time to address how Angular parses your html and connects to the controller and the controllers scope.
    - @expand where did somenumber come from? How is this connected to ng-model?

    I feel get explained failry well in the actual blog post. I will add more code docs to the HTML page, but I'd rather keep the big explanations in the tutorial. If you feel that some areas need to be expanded in the tutorial itself, do let me know.

5. "We've set some values on $scope, but how does that update the UI? Angular lives and dies by its digest cycle, knowing about it early is helpful. Take some time to explain what happens after $http[method] completes." Good. I could use some help here. This is probably one of the best explanations I have read for the basic hello world example: http://docs.angularjs.org/guide/scope. (Scroll to the very bottom). I agree that something needs to be said, but how in-depth should I go. I'd like to explain more at the browser event loop, then bring in how Angular modifies that - but then mostly just link to the documentation. I don't think it's super important for this example. 

That said, two way binding and the digest cycle are vital for understanding how Angular works. I should emphasize that in the conclusion.
