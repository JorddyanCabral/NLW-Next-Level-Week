# O que é react e como vamos utiliza-lo #
 * É uma biblioteca de contrução de interfaces * 
# vantagens: #
    Cria uma SPA (Simple Page Application)
     
# TipeScript #
    * Add Tipagem à interface * 
    {
        Ex
        interface User{
            name : string
            email: string

            address:{
                city:string
                state: string

                }   
        }

        func mostraDAdosUser(user : User){
            return `${user.name} ${user.email} - ${user.addres.city}`
        }

    } 


# How to strar the project #
* cd web
  yarn start *


# O que é um componente ? 
    componente é uma function de retorno HTML

# Prorpiedades ?
    Prorpiedades = Atributo 
     
