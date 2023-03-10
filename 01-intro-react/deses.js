//Desestruraccion
//

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Iroman',
    rango: "soldado"
}

const {nombre, edad, clave} = persona;


// console.log(nombre)
// console.log(edad)
// console.log(clave)


const useContext = ({clave, nombre, edad, rango = 'Capitan'})=>{

    return{
        nombreClave:nombre,
        anios: edad,
        latlng:{
            lat: 14.5665,
            lng: -5465.54
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng} } = useContext(persona);


console.log(nombreClave, anios)
console.log(lat, lng)