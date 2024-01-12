export function fetchUser(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(function resolveData() {
      resolve({ firstName: "John", lastName: "Doe" });
    }, 500);
  });
}

export function fetchNestedUser(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(function resolveData() {
      resolve({
        first_name: "John",
        last_name: "Doe",
        address: { street: "15", ward: undefined },
        friends: [{ first_name: "Alice", last_name: "Doe" }]
      });
    }, 500);
  });
}
