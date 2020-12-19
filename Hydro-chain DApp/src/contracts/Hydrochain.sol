pragma solidity ^0.5.0;

contract Hydrochain {
    address payable public admin = 0x9726aE8E5a253cC42665aB37F8d3364a261323f4;
    uint public uCount=0;
    mapping(uint => User) public users;

    struct User {
        address payable userAddress;
        string lastDate;
        uint tunits;
        uint cunits;
    }

    event userInitialized(
        uint id,
        address payable userAddress, 
        string lastDate,
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
        string lastDate,
        uint amount
    );

    function initializeUser() public {
        uCount++;
        users[uCount] = User(msg.sender, "N/A", 0, 0);
        emit userInitialized(uCount, msg.sender, "N/A", 0, 0);
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

    function payBill(string memory _date) public payable {
        address payable _deployer = admin;
        address(_deployer).transfer(msg.value);
        uint _i;
        User memory _user;
        for(_i=1;_i<=uCount;++_i)
            if(users[_i].userAddress==msg.sender){
                _user=users[_i];
                break;
            }
        _user.cunits=0;
        _user.lastDate=_date;
        users[_i] = _user;
        emit billPaid(_deployer,msg.sender,_date,msg.value);
    }
}
