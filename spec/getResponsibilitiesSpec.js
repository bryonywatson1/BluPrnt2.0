'use strict';

describe("getResponsibilities", function(){

 beforeEach(function() {


   for(var i=0; i< 3; i++) {
   $('.class-class').val('you');
   $('.collaborator-class').val('you');
   $('.method-class').val('you');
   }

 })

it("Should store 3 elements when a user fills in 3 responsibilities", function(){
 visit("file:///Users/DarkChocLatte/Google%20Drive/Projects/BluPrnt2.0/index.html")
 fill_in('class-cell').with('123')

 expect(getResponsibilities().length === 3)
})
})
