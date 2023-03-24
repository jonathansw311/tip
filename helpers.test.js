describe("tests helpers.js page", function() {

it('should add a number to the totalcalutlate payments()', function () {
  testPay={};
  type='TestBill';
  testPay.TestBill = "50"
  allPayments.testing=testPay;
  testAdd = sumPaymentTotal(type);
  

    expect(testAdd).toEqual(50);
    delete allPayments.testing;
  });


  it('correctly convert bill and tip into a percent', function () {
    let billAmt =100;
    let tipAmt = 20;

    tResults = calculateTipPercent(billAmt, tipAmt);
    
  
      expect(tResults).toEqual(20);
     // delete allPayments.testing;
    });



    it('appends td and tr to the bell and tip section', function () {
     let tr = document.createElement('tr');
     tr.classList.add='test'; 
     value = 5;
      appendTd(tr, value);
      
    
        expect().toEqual();
       //no retrun on this one so???
      });



});