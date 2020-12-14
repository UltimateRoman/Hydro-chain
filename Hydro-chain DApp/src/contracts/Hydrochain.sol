pragma solidity ^0.5.0;

contract Hydrochain {
    uint public uCount=0;
    mapping(uint => User) public users;

    struct User {
        address payable userAddress;
        uint tunits;
        uint cunits;
    }

    event userInitialized(
        uint id,
        address payable userAddress, 
        uint tunits,
        uint cunits
    );

    event unitsAdded (
        address payable userAddress, 
        uint tunits,
        uint cunits
    );

    event billPaid (
        address payable deployer,
        address payable user,
        uint amount
    );

    function initializeUser() public {
        uCount++;
        users[uCount] = User(msg.sender, 0, 0);
        emit userInitialized(uCount, msg.sender, 0, 0);
    }

    function addUnit(uint _units) public {
        require(_units >= 0);
        uint _i;
        User memory _user;
        for(_i=1;_i<=uCount;++_i)
            if(users[_i].userAddress==msg.sender){
                _user=users[_i];
                break;
            }
        if(_units > _user.tunits) {
            _user.cunits += _units - _user.tunits;
            _user.tunits = _units;
        }
        users[_i] = _user;
        emit unitsAdded(msg.sender,_units,_user.cunits);
    }

    function payBill() public payable {
        address payable _deployer = users[0].userAddress;
        address(_deployer).transfer(msg.value);
        uint _i;
        User memory _user;
        for(_i=1;_i<=uCount;++_i)
            if(users[_i].userAddress==msg.sender){
                _user=users[_i];
                break;
            }
        _user.cunits=0;
        users[_i] = _user;
        emit billPaid(_deployer,msg.sender,msg.value);
    }
}
