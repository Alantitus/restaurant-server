const jsonServer= require('json-server')
const RestaurantServer =jsonServer.create()
const middleware=jsonServer.defaults()
const route= jsonServer.router('db.json')
const PORT =3000 || process.env.PORT

RestaurantServer.use(middleware)
RestaurantServer.use(route)
RestaurantServer.listen(PORT,()=>{
    console.log(`Server started at port ${PORT} and waiting for client request`)
})