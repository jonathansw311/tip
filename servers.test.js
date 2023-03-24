describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

//  it('should add a new tr on updateServerTable()', function () {
    //tipAverage ="";
   //updateServerTable();

    //expect(tipAverage).toEqual('tr');
   // expect(allServers['server' + serverId].serverName).toEqual('Alice');
//  });





  afterEach(function() {
   let removeTemp = document.getElementById('server' + serverId) // teardown logic
   removeTemp.remove();
   delete allServers['server' + serverId];
   serverId --;

  });
});
