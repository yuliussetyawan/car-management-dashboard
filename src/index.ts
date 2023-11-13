import express, { Application } from "express";
import CarsHandler from "./handlers/cars";
import uploadFileUtil from "./utils/uploadFile";
import cloudinaryUpload from "./utils/cloudinaryUpload";

const app: Application = express();
const PORT: number = 3001;

app.use(express.json());

// Handlers
const carsHandler = new CarsHandler();

// Define routes
app.get("/api/cars", carsHandler.getCars);
app.get("/api/cars/:id", carsHandler.getCarById);
app.get("/api/cars/category/:size", carsHandler.getCarBySize);
app.post(
  "/api/cars",
  cloudinaryUpload.single("car_photo"),
  carsHandler.uploadCar
);
app.patch(
  "/api/cars/:id",
  cloudinaryUpload.single("car_photo"),
  carsHandler.updateCarById
);
app.delete("/api/cars/:id", carsHandler.deleteCarById);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
