# GWI QA Engineering Challenge
## Exercise: Charts page testing

### Describe the test scenarios and automate them

In this assigment you need to implement a E2E testing of your taste based on a preexisting micro application. Instructions on how to run the micro application can be found right below.
Please take your time with the assignment, we think it should not take more than 6 hours. 

### `My Charts` Micro application

Charts are a central piece of our platform. `My Charts` is a small app that allows you to view your existing charts. This micro application consists of a 
- dummy server with a single endpoint and 
- a 3-page web interface where the e2e testing should only take place on the first page  

### Technical stuff

In order to be able to run the application locally you have to: 
1. Install node version < 16 (due to a bug on [create-react-app](https://stackoverflow.com/questions/69693907/error-err-package-path-not-exported-package-subpath-lib-tokenize-is-not-d))
2. Clone git repository: `git clone https://github.com/GlobalWebIndex/platform2.0-qa-challenge.git`
3. Goto dir: `cd platform2.0-qa-challenge`
4. Install dependencies: `npm install`
5. Start application: `npm run start`
    - This creates and runs a server on http://localhost:3001 and also
    - a react application on http://locahost:3000 which proxies requests to the server above.
6. After that the micro application can be found here: http://localhost:3000

We prefer using the cypress e2e framework but any tool of choice would do.

### QA Testing challenge

Provide Functional E2E test suite using your UI automation framework of choice. 

Note that we have omitted a lot of details in this description on what kind of tests should be implemented and how. 
We hope you will fill these details in and prove to us that you are aware of industry best practices and that you also follow them. In your code, we would like to see your code structure, test design, and test strategy.

In case you are not able to implement something you would normally implement for time reasons, make it clear with a comment.
Feel free to ask questions if something is not clear, please give your best shot on this task.

### Submission
Just a make a PR to the current repo! Good luck, potential colleague!
