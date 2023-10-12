var Election= artifacts.require("./Election.sol");

contract("Election", function(accounts){
    it("Intializes with two candidates", function() {
        return Election.deployed().then(function(instance){
            return instance.candidateCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });
});