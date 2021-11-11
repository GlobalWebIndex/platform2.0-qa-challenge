# platform2.0-qa-challenge_LK

## QA challenge proposed solution

The folder tests has been added inside src folder. 

In order to execute https://github.com/GlobalWebIndex/platform2.0-qa-challenge and implement/execute my tests the following dependencies were installed:
1. npm install 
2. npm install cypress
3. npm install mocha
4. npm install cypress-multi-reporters
5. npm install mochawesome
6. npm install mochawesome-merge
7. npm install mochawsome-report-generator
8. npm install chai



### The initial implementation of testing includes 10 scenaria that can be found [here](https://github.com/ledakaradimou/platform2.0-qa-challenge_LK/blob/main/src/tests/cypress/integration/test-LK/tests_page1.spec.js):
1. This checks that the page is loading successfully, and the header is visible
2. This tests that the search bar, the header, and the Create button are as expected in the top bar; the header contains the title 'Charts', the button contains the text 'Create' and the search bar is visible.
3. This tests that the header of the table is as expected. The titles of the three columns are verified.
4. This tests that the initial sorting is done my name and the order is correct. Please note that this is a very simple solution and definitely not the most efficient one due to time constraints. Another proposed solution has been included in the comments in the end of the file tests/cypress/integration/test-LK/tests_page1.spec.js 
5. This tests that one we click on the 'Date created' column name, the sorting changes based on that. Moreover, the pairs of name, date created are verified (i.e that once the order changes for the dates, the names also change accordingly.) This also needs a lot of improvement.
6. This tests that once we click on 'Last modified' column name, the sorting changes based on that. Moreover, the triplets of date modified, date created and name are verified (i.e that once the order changes for the dates, the names and creation dates also change accordingly.) -- Failed 
7. This tests the search bar when searching with the beginning of the word.
8. This tests the search bar when searching with part of the word (in this case, a letter in the middle.)
9. This tests the search bar when searching with the end of the name
10. This tests than once we click on the 'Create' button we move to page 2, and from there that we can move back. 


### The reports of the tests can be found [here](https://github.com/ledakaradimou/platform2.0-qa-challenge_LK/tree/main/src/tests/cypress/reports/mocha)
### Moreover, a video of the execution can be found [here](https://github.com/ledakaradimou/platform2.0-qa-challenge_LK/tree/main/src/tests/cypress/videos/test-LK)

### Further tests to be included and other improvements:
1. The tests related to sorting need to be improved significantly
2. The data should be compared to the data from platform2.0-qa-challenge_LK/server/index.js
3. The API response could also be checked automatically 
4. Further checks should be made for each of the elements; the content is checked for some of the elements, byt the type and other properties could be checked.
5. Checks on the responsiveness could be made; e.g ee can check that once we click on a button on the table, the font-weight changes to 700 and all other buttons for the columns of the table have font-weight = 500
6. In case the charts should be clickable (in future implementations) it should be checked that they are rendered as expected and/or can be downloaded.
7. Instead of clearing the search bar after each search test, we could be initializing the state each time (this could be done after sorting as well)
8. Tests should be included in setupTests.ts.  
