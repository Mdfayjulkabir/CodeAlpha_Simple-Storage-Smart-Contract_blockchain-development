// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    int private value;

    constructor(int _initialValue) {
        value = _initialValue;
    }

    function getValue() public view returns (int) {
        return value;
    }

    function increment() public {
        value += 1;
    }

    function decrement() public {
        value -= 1;
    }
}
