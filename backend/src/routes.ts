import {Router} from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes= Router()

//MVC
//Models
//views
//controlers


routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', OrphanagesController.create)


export default routes;