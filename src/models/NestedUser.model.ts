import { immerable } from "immer";
import { UserModel } from "./User.model";

type AddressArgs = {
  street?: string;
  ward?: string;
};

class Address {
  street?: string;
  ward?: string;

  get fullAddress() {
    return `${this.street} ${this.ward}`;
  }

  constructor({ street, ward }: AddressArgs) {
    this.street = street;
    this.ward = ward;
  }
}

type NestedUserModelArgs = {
  firstName: string;
  lastName: string;
  address?: Address;
  friends: UserModel[];
};

class NestedUserModel {
  [immerable]: boolean;
  firstName: string;
  lastName: string;
  address?: Address;
  friends?: UserModel[];

  constructor({ firstName, lastName, address, friends }: NestedUserModelArgs) {
    this[immerable] = true;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address ? new Address(address) : undefined;
    this.friends = friends?.map((f) => new UserModel(f));
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export { NestedUserModel };
