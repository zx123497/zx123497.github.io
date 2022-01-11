pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract UglyCoin is ERC20{
    constructor(uint256 initialSupply) ERC20('UglyCoin', 'UGC'){
        _mint(msg.sender, initialSupply * (10**decimals()));
    }
}