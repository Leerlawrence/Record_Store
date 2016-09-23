var assert =require( 'assert' );
var Record = require( '../record.js' );


describe('Record', function(){
  var record;
  var records=[];


   beforeEach(function(){
     record = new Record("eminem", "The Marshall mathers Story", 12.00);
     records.push(record);
      record = new Record("S and G", "Bookends", 12.00);
      records.push(record);
     record = new Record("Josef Lawrence","Christian",3.00);
      records.push(record);
     console.log(records); 

   });

  it('should create a record with an artist, title and price ', function(){
    record = new Record("David Bowie", "Alladin Sane", 12.00);
   records.push(record);
    //console.log(record);
    assert.equal("David Bowie", record.artist);
  })

  