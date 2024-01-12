type UserModelArgs = {
  firstName: string;
  lastName: string;
};

class UserModel {
  readonly firstName: string;
  readonly lastName: string;

  constructor({ firstName, lastName }: UserModelArgs) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export { UserModel };
