pragma solidity >=0.5.13 <0.7.0;

interface I {
	function write(string calldata str) external;
    function read() external view returns (string memory);
}

abstract contract A is I {

    string _str;
    
    constructor() public {}

    function write(string memory str)
        public
        override
    {
        _str = str;
    }

    function read() public view override returns (string memory){
        return _str;
    }
}

abstract contract B is A {

    uint256 _number;

    constructor() public A() {}

    function write(uint256 number, string memory str)
        public
    {
        _number = number;
        _str = str;
    }
}

contract C is B {
    constructor() public B() {}
}

