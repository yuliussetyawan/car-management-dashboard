## Flow bikin endpoint
4 layers
1. router done
2. handler done
3. service (usecase) done
4. repository (save/get ke db) done


## Migration
1. npx knex migrate:make create_cars_table
2. npx knex migrate:up


![DB](db.png)



## Endpoint


1. Get all cars:
http://localhost:3001/api/cars


2. Get car by id:
http://localhost:3001/api/cars/:id


3. Get car by size category:
http://localhost:3001/api/category/:size


4. Upload car (post):
http://localhost:3001/api/cars

body
car_name (string)
car_size (string)
car_rent_price (int)
car_photo (file)


5. Update car by id (patch):
http://localhost:3001/api/cars/:id

body
car_name (string)
car_size (string)
car_rent_price (int)
car_photo (file)


6. Delete car by id (delete):
http://localhost:3001/api/cars/:id


