pragma solidity ^0.4.24;

contract HelloWorld {
    string public greeting;

    constructor (string _greeting) public {
        greeting = _greeting;
    }
    function setGreeting(string _greeting) public {
        greeting =_greeting;
        
    }
    function say( )  public constant returns (string) {
        return greeting;
        
    }
}