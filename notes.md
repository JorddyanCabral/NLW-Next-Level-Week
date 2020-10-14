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
     
####  Aula 02 

```
Rotas = conjunto de tudo
Recurso = usuário
#Metodos HTTP# 
*  GET = Buscando Informação (Lista, item)
* POST = criando Informação 
* PUT = editando uma Informação
* DELETE = apagando uma Informação

Parametros 
Querry Parms: http://localhost:3333/users?search=*name*&id...
Route  Parms: http://localhost:3333/users/1 (Identificar um recurso ) Ex Delete
Body : http://localhost:3333/users (Corpo da requisição )
```
# 
```
DB = Data Base
Drive nativo = escreve o querry como um DB
Querry Builder = escreve o querry como um JS 
ORM(Object RElational Mapping) = uma class JS simboliza uma table no DB
```
# 
```
UP method realiza alteraçções( Criar table, criar novo campo, deletar algum campo)
DOWN method desfaz oq foi feito no UP 
```









