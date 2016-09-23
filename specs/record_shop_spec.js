var assert =require( 'assert' );
var Record = require( '../record.js' );
var Record_shop = require('../record_shop.js');

describe('Record_shop', function(){
    it('should start off with no records ', function(){
      var record_shop = new Record_shop();
      assert.equal(0, record_shop.records.length);
    });

    it('should be able to add records', function(){
      var record_shop = new Record_shop();
      var record = new Record({artist:'Elton John', title:'Candle in the Wind', price:50});
      Record_shop.addRecord(record);
      assert.deepEqual(record, record_shop.record[0]);
    });

    });


//   var record;
//   var records=[];


//    beforeEach(function(){
//      record = new Record("eminem", "The Marshall mathers Story", 12.00);
//      records.push(record);
//       record = new Record("S and G", "Bookends", 12.00);
//       records.push(record);
//      record = new Record("Josef Lawrence","Christian",3.00);
//       records.push(record);
//      console.log(records); 

//    });

//   it('should create a record with an artist, title and price ', function(){
//     record = new Record("David Bowie", "Alladin Sane", 12.00);
//    records.push(record);
//     //console.log(record);
//     assert.equal("David Bowie", record.artist);
//   })



  
