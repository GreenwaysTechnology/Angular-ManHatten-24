//string : "",'',``,`` with string interpolation

let firstName: string = "Subramanian"
let lastName: string = 'Murugan'
//string concatation using +
let fullName: string = firstName + lastName
//string concatation using ``
fullName = `${firstName} ${lastName}`

console.log("Name" + fullName)
console.log("Name", fullName)
console.log(`Name ${fullName}`)

//multi line using back tic

let template=`
 <div>
    <h1>Hello</h1>
 </div>
`
console.log(template)