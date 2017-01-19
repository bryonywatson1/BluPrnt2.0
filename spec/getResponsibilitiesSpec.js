'use strict';

describe("getResponsibilities", function(){

it("Should store 3 elements when a user fills in 3 responsibilities", function(){
  visit("file:///Users/DarkChocLatte/Google%20Drive/Projects/BluPrnt2.0/index.html")
  fill_in('class-cell').with('123')

  expect(getResponsibilities().length === 3)
})










})
