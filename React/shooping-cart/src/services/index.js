import { httpClient } from "./http-client";
import { ProductService } from "./products-service";

export const services = {
    productService: new ProductService(httpClient)
};

export const useServices = () => {
    return services;
};