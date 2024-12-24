var UserController = (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.init = function () {
        console.log(this.userService.findAll());
    };
    return UserController;
}());
export { UserController };
