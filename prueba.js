const inputs = {
    firstname: 'Alex',
    lastname: 'Sierra',
    email:'sierra@gmail.com'
} 

const copiaObjeto = { ...inputs, ['firstname']: 'Carlos' }

console.log( copiaObjeto );