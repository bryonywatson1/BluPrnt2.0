'use strict';

describe("getResponsibilities", function(){

 // beforeEach(function() {
 //
 //   $("<a href='/Users/rory/Documents/Makers/week9/BluPrnt2.0/index.html'></a>").click();
 //   for(var i=0; i< 3; i++) {
 //   $('.class-class').val('you');
 //   $('.collaborator-class').val('you');
 //   $('.method-class').val('you');
 //   }
 //
 // })

  it("should use jquery and work this time", function(){
    jasmine.getFixtures().fixturesPath = './';
    loadFixtures('index.html')
  expect($('.method-class')).toBeInDOM()
  })

  it("Should store 1 elements when a user fills in 1 responsibility", function(){
    jasmine.getFixtures().fixturesPath = './';
    loadFixtures('index.html')
    $('#add-responsibility').click();
    $('#add-responsibility').click();
    $('.method-class').val('yousuck');
    console.log(getResponsibilities())
  expect(getResponsibilities().length).toEqual(3)
  })


})
