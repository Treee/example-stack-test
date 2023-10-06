# example-stack-test

This simple example is meant to help guide someone into learning how to drive their software development from a test first mindset.

There are several features to a Stack aside from the Last In First Out (LIFO) theme it is known for:

- knows when it is empty
- can push an item on to the stack
- can pop the most recent item off the stack
- can pop the most recent item off the stack with a different set of values
- can remove all items from the stack
- knows how many items it holds
- decreases count when poping after pushing
- can pop multiple values off the stack
- can tell if a value is contained inside
- can tell if a value is not contained inside

By writing the least amount of code starting with the first test, you can see how our minds try to complicate the solution to simple problems let alone more complex ones we face day to day. My challenge to you is try to see how long you can pass the above tests without using an array to store data from the very beginning.

# Dependencies

All the dependencies below are "dev" only and will not see production.

- Jasmine - Test Runner
- Jasmine Reporter - Test Case Fancy Print
- Nodemon - Process monitor to restart tests when changes are triggered.

# How To Use

- `git clone https://github.com/Treee/example-stack-test.git`

This clones the repository in the current directory

- `cd example-stack-test`

This changes the directory to the folder we just cloned from github. It contains the source code

- `npm install`

This uses npm to install the dependencies outlined above.

- `npm run test`

This runs the test suite. The nodemon will auto restart the test harness anytime it registers a change.
