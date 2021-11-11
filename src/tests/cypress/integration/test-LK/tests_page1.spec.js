/// <reference types="cypress" />

describe('Page 1 tests',()=>{

    it('page 1 loads successfully',()=>{
        //initial test that the page loads and the basic header is present
        cy.visit("/")
        cy.get('h5.MuiTypography-root').should('be.visible')
    })

    
    it('page 1 top bar has all the elements',()=>{
        //checking that the header has the Charts title:
        cy.get('h5.MuiTypography-root').should('contain','Charts')

        //checking that the create button to navigate to page 2 is present:
        cy.get('.createButton').should('contain','Create')

        //checking that the search button is visible
        cy.get('input[placeholder="Search charts"').should('be.visible')
    })
    

    it('page 1 has the table of the charts, with the correct structure',()=>{
        //checking the titles for the 3 columns of the table have the expected titles
        cy.get('.header > div:nth-child(1) > p:nth-child(1) > button:nth-child(1) > span:nth-child(1)')
          .should('contain','Name')
        cy.get('.header > div:nth-child(2) > p:nth-child(1) > button:nth-child(1) > span:nth-child(1)')
          .should('contain','Date created')
        cy.get('.header > div:nth-child(3) > p:nth-child(1) > button:nth-child(1) > span:nth-child(1)')
          .should('contain','Last modified')
    })


//the method to check the sorting below is not efficient 
//moreover the data should be compared to the data in /platform2.0-qa-challenge/server/index.js
//finally data should be treated as triplets and the integrity should be checked when sorting 
//please also check the end of this file for a better proposed solution
    it('table content is correct, and default sorting by name is correct',()=>{
        var NamesT = ['Chart 1','Chart 2','Chart 5','My awesome test 4','Test 3'];
        for (var i = 2; i < 7; i++) {
            var z = i-2
            //cy.log(z)
            //cy.log(NamesT[z])
            cy.get('div.MuiGrid-root:nth-child('+i+') > div:nth-child(1) > p:nth-child(1)')
              .contains(NamesT[z])
        }
    })


    it('table sorting by date created is as expected',()=>{
        var NamesT = ['Chart 2','Chart 5','My awesome test 4','Test 3','Chart 1'];
        var CreatedT = ['29 Mar 2021','31 May 2021','31 May 2021','13 Jul 2021','13 Sep 2021'];
        cy.get('.header > div:nth-child(2) > p:nth-child(1) > button:nth-child(1) > span:nth-child(1)').click()
        for (var i = 2; i < 7; i++) {
            var z = i-2
            cy.get('div.MuiGrid-root:nth-child('+i+') > div:nth-child(1) > p:nth-child(1)')
              .contains(NamesT[z])
            cy.get('div.MuiGrid-container:nth-child('+i+') > div:nth-child(2) > p:nth-child(1)')
              .contains(CreatedT[z])
        }
    })


    it('table sorting by last modified is as expected',()=>{
        var NamesT = ['Chart 1','Test 3','Chart 5','Chart 5','My awesome test 4','Chart 2'];
        var CreatedT = ['13 Sep 2021','13 Jul 2021','31 May 2021','31 May 2021','29 Mar 2021'];
        var LatestT = ['13 Sep 2021','13 Jul 2021','31 May 2021','31 May 2021','29 Mar 2021'];
        
        cy.get('.header > div:nth-child(3) > p:nth-child(1) > button:nth-child(1) > span:nth-child(1)')
          .click()

        for (var i = 2; i < 7; i++) {
            var z = i-2
            cy.get('div.MuiGrid-root:nth-child('+i+') > div:nth-child(1) > p:nth-child(1)')
              .contains(NamesT[z])
            cy.get('div.MuiGrid-container:nth-child('+i+') > div:nth-child(2) > p:nth-child(1)')
              .contains(CreatedT[z])
            cy.get('div.MuiGrid-container:nth-child('+i+') > div:nth-child(3) > p:nth-child(1)')
              .contains(LatestT[z])
        }
    })

        
    //there are 3 tests below regarding the search button
    //a more dynamic solution would be more efficient to check several combinations 
    it('Search works as expected when searching with the beginning of the word',()=>{
        cy.get('.MuiFormControl-root').type('Char')
        
        cy.wait(1000)

        cy.contains('Chart 2')

        cy.contains('Chart 1')

        cy.contains('Chart 5')

        cy.get('.root')
          .should('not.contain','Test 3')

        cy.get('.root')
          .should('not.contain','My awesome test 4')

        cy.get('.MuiFormControl-root')
          .clear()
    })

    it('Search works as expected when searching with part of the word (e.g a letter in the middle)',()=>{
        cy.get('.MuiFormControl-root')
          .type('a')

        cy.wait(1000)

        cy.contains('Chart 2')

        for (var i = 2; i < 6; i++) {
            cy.get('div.MuiGrid-container:nth-child('+i+') > div:nth-child(1) > p:nth-child(1)').contains('a')
        }

        cy.get('.root')
          .contains('My awesome test 4')

        cy.get('.root')
          .should('not.contain','Test 3')

        cy.get('.MuiFormControl-root')
          .clear()
    })

    it('Search works as expected when searching with the end of the name',()=>{
        cy.get('.MuiFormControl-root')
          .type(' 3')

        cy.wait(1000)
        cy.contains('Test 3')

        cy.get('.root')
          .should('not.contain','Chart')

        cy.get('.root')
          .should('not.contain','awesome')

        cy.get('.MuiFormControl-root')
          .clear()
    })


    //checking the create chart button works as expected   
    it('Create chart button to page 2',()=>{
        //cy.get('.createButton')
        //  expect.to.be.enabled
        cy.get('.createButton')
          .click()

        cy.location('pathname')
          .should('eq', '/Page2')

        cy.get('.MuiButton-label')
          .click()

        //involves testing of page 2, but included for completeness
        cy.location('pathname')
          .should('eq', '/')
    })


})

/*To test the contents of the table and the sorting, the following approach would be more appropriate:
build chartsUI which would contain the data as in the JSON object. Then this should be compared to 
cy.readFile('..../platform2.0-qa-challenge/server/index.js')

     it('test Contents of table',()=>{
       let ChartsUI = []
       let charts = {}
       for (var i = 2; i < 7; i++) {
           cy.get('div.MuiGrid-root:nth-child('+i+') > div:nth-child(1) > p:nth-child(1)').each(($el)=>{
           charts.name = ($el.text())})
           cy.get('div.MuiGrid-root:nth-child('+i+') > div:nth-child(2) > p:nth-child(1)').each(($el)=>{
           charts.created_at = ($el.text())})
           cy.get('div.MuiGrid-root:nth-child('+i+') > div:nth-child(3) > p:nth-child(1)').each(($el)=>{
           cy.log(charts)
           charts.modified_at = ($el.text())})
           ChartsUI.push(charts)
           cy.log(ChartsUI)
        cy.log(ChartsUI)

the sorting by name can be checked by comparing the items in the order they are rendered to something like the following:
ChartsUI.sort((firstItem, secondItem) => firstItem.name - secondItem.name);

the sorting can be checked by comparing the items in the order they are rendered to something like the following (for each different case - initial sort by name, sort by created or sort by modified):
ChartsUI.sort((firstItem, secondItem) => firstItem.name - secondItem.name);
ChartsUI.sort((firstItem, secondItem) => firstItem.created_at - secondItem.created_at);
ChartsUI.sort((firstItem, secondItem) => firstItem.modified_at - secondItem.modified_at);


beforeEach(() => {
    cy.request({
        url: "http://localhost:3000/api/charts",
        method: 'GET'
    }).then(resp => {
        cy.wrap(resp.body.data)
        cy.log(cy.wrap(resp.body.data))
    }).as("charts")
    cy.intercept("http://localhost:3000/api/charts").as("chartsAPI")
    cy.visit("/")


   }})
*/

/*Other tests can be implemented to check the responsiveness of the page; e.g. to check which buttons are enabled:
created by, last modified, name 
Moreover, we can check that once we click on a button on the table, the font-weight changes to 700 and all other buttons 
for the columns of the table have font-weight = 500.
In addition to that, it would make more sense for the charts to be clickable, and display something or downloand a chart when clicking on it. 

Finally, more tests about the types should be implemented. 

*/