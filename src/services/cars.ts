import { CarRequest } from "../models/dto/car";
import { Car } from "../models/entity/car";
import CarsRepository from "../repositories/cars";

class CarServices {
  static async getCars(): Promise<Car[]> {
    const listCar = await CarsRepository.getCars();

    return listCar;
  }
  static async getCarsById(queryId: number): Promise<Car[]> {
    const listCar = await CarsRepository.getCarsById(queryId);
    return listCar;
  }

  static async getCarsBySize(querySize: string): Promise<Car[]> {
    const listCar = await CarsRepository.getCarsBySize(querySize);
    return listCar;
  }
  static async uploadCar(car: CarRequest): Promise<Car> {
    const carToCreate: Car = {
      car_name: car.car_name,
      car_size: car.car_size,
      car_rent_price: car.car_rent_price,
      car_photo: car.car_photo,
      // created_at: car.created_at,
      // updated_at: car.updated_at,
    };
    const createdCar = await CarsRepository.uploadCar(carToCreate);

    return createdCar;
  }

  static async deleteCarById(queryId: number): Promise<Car | null> {
    const deletedCar = await CarsRepository.deleteCarById(queryId);
    return deletedCar;
  }

  static async updateCarById(
    queryId: number,
    car: CarRequest
  ): Promise<Car | null> {
    const carToUpdate: Car = {
      car_name: car.car_name,
      car_rent_price: car.car_rent_price,
      car_size: car.car_size,
      car_photo: car.car_photo,
      // created_at: car.created_at,
      // updated_at: car.updated_at,
    };
    const updatedCar = await CarsRepository.updateCarById(queryId, carToUpdate);
    return updatedCar;
  }
}

export default CarServices;