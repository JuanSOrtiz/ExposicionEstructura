import React from 'react'
import {useState, useEffect} from 'react'

function Formulario() {

 
  const handleSubmit =() =>{

    
    // Obtener los valores de los campos del formulario
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const release = document.getElementById("release").value;
    const description = document.getElementById("description").value;

    

    const data={"name":name, "role":role,"releaseDate":release ,"description":description}

    console.log(data)
    try {
      fetch(`http://localhost:3000/champions`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // Si es necesario, puedes agregar encabezados de autenticación u otros encabezados requeridos por tu backend
        },
        body:JSON.stringify(data)
      })
      
      //window.location.reload()
    } catch (error) {
        console.log(error)
    }
  }
  

  return (
      <div className='lg:w-2/5'>

          <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>

              <div className='mb-5'>
                  <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Name</label>
                  <input id="name" 
                      type="text" 
                      placeholder='Nombre de la mascota' 
                      className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                  />
              </div>

              <div className='mb-5'>
                  <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Role</label>
                  <input 
                      id="propietario" 
                      type="role" 
                      placeholder='Nombre del propietario' 
                      className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
              </div>

              <div className='mb-5'>
                  <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Release date</label>
                  <input 
                      id="release" 
                      type="date" 
                      placeholder='Nombre del propietario' 
                      className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
              </div>

              <div className='mb-5'>
                  <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Description</label>
                  <input 
                      id="description" 
                      type="text" 
                      placeholder='Nombre del propietario' 
                      className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
              </div>

              <input 
                    type="submit" 
                    id="" 
                    value={"Agregar Paciente"}
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                />


          </form>
          
      </div>
  )  
}

export default Formulario