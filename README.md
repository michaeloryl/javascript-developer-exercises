# developer-exercises
Some simple JavaScript developer exercises for interviews

Just fork this repo (or download it) and look at each of the files in the `exercises` folder.

Each exercise will have the shell of some code as well as a description, in comments, as to what you need to add to the code to get the desired result.

For example, given the following exercise:

    function sayHello(name) {
      // add code here that will take the name param and
      // say hello in the form of "Hello, Michael!" to the console
    }

    sayHello('Michael')

    // Expected output to the console would be:
    // Hello, Michael!

So in this particular case, we're looking for you to modify the code so that it looks something like the following:

    function sayHello(name) {
      console.log('Hello, %s!', name)
    }

    sayHello('Michael')

It's output when run with the `node sample_exercise.js` command should be:

    Hello, Michael!

There are obviously many ways this could be done.  You get to choose how you do things, but we might have opinions as to which solutions we prefer to see.  Don't try to make things overly complex, but do make sure that you aren't simply hard-coding an answer.  For example, coding the above exercise so that it used `console.log('Hello, Michael!')` hard coded like that, so that it wouldn't work with a call of `sayHello('Jane')`, is not acceptable.

You will need to have a recent version of Node.js installed to run your code.  We make use of some built-in Node modules for testing the results of your code, such as our use of Node's `assert.deepEqual()` call in exercise 1.  You may feel free to use ES6 constructs for your work, as well.

Once you have completed your exercises, email the URL of your forked project or a ZIP file of the actual project to your recruiter so that it may be forwarded on to my company.  If you send a ZIP file, please make sure not to include any `NODE_MODULES` folders.
