
//getUser
const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User Not found')

    }
}

const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')

    }
}


const showdashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to Admin')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest')

    }
}
function main() {
    getUser((user) => {
        login(user, (status) => {
            showdashboard(status, (adminPage) => {
                console.log(adminPage)
            }, (guestPage) => {
                console.log(guestPage)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })
}
main()