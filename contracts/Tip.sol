pragma solidity ^0.4.13;

import 'zeppelin/contracts/math/SafeMath.sol';
import './AlisToken.sol';


contract Tip {

    using SafeMath for uint256;

    /** Storage */
    AlisToken token;

    /* Constructor */
    constructor(address _tokenAddress) public {
        token = AlisToken(_tokenAddress);
    }

    /** Public functions */

    function tip(address _to, uint256 _amount) public {
        token.transferFrom(msg.sender, _to, _amount.sub(5));

        // Tokens to be burned must be transferd to this contract address.
        token.transferFrom(msg.sender, this, 5);
        token.burn(5);
    }
}
