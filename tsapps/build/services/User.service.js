var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.findAll = function () {
        return [
            {
                id: 1, name: 'a'
            }
        ];
    };
    return UserService;
}());
export { UserService };
