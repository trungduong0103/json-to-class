import { shipmentData } from "./shipmentData";

const fetchShipment = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(shipmentData), 500);
  });
};

export { fetchShipment };
