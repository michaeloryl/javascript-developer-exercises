# developer-exercises
Some simple JavaScript developer exercises for interviews

Just fork this repo (or download it) and look at each of the files in the `exercises` folder.

Each exercise will have the shell of some code as well as a description, in comments, as to what you need to add to the code to get the desired result.

For example, given the following exercise:

    function sayHello(name) {
      // add code here that will take the name param and say hello in the form of "Hello, Michael!"
    }

    sayHello('Michael')

    // Expected output to the console would be:
    // Hello, Michael!

So in this particular case, we're looking for you to modify the code so that it looks something like the following when run in Node.js:

    function sayHello(name) {
      console.log('Hello, %s!', name)
    }

    sayHello('Michael')

There are obviously many ways this could be done.  You get to choose how you do things, but we might have opinions as to which solutions we prefer to see.  Don't try to make things overly complex, but do make sure that you aren't simply hard-coding an answer.  For example, coding the above exercise so that it used `console.log('Hello, Michael!')` hard coded like that, so that it wouldn't work with a call of `sayHello('Jane')`, is not acceptable.

Once you have completed you exercises, email the URL of your forked project or a ZIP file of the actual project to your recruiter so that it may be forwarded on to my company.
