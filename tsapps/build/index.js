var login = function (userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        success('login success');
    }
    else {
        failure('login failed');
    }
};
login('admin', 'admin', function (status) { return console.log(status); }, function (err) { return console.log(err); });
login('xxx', 'yyy', function (status) { return console.log(status); }, function (err) { return console.log(err); });
