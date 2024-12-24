
function blockMe(message){
     console.log(message)
}
function sayHello(){
    console.log('hello')
}

function main() {
  blockMe('start')
  sayHello()
  blockMe('end')
}
main()