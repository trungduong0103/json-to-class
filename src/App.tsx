import React from "react";
import "reflect-metadata";
import { produce } from "immer";
import { plainToClass } from "class-transformer";
import { fetchNestedUser, fetchUser } from "./fetchers/user.fetcher";
import { UserModel } from "./models/User.model";
import { camelizeKeys } from "fast-case";
import { NestedUserModel } from "./models/NestedUser.model";
import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  // const [user, setUser] = React.useState<UserModel | null>(null);
  const [nestedUser, setNestedUser] = React.useState<NestedUserModel | null>(
    null
  );

  // React.useEffect(() => {
  //   (async () => {
  //     setIsLoading(true);
  //     const data = await fetchUser();
  //     const user = plainToClass(UserModel, data as UserModel);

  //     setUser(user);
  //     setIsLoading(false);
  //   })();
  // }, []);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await fetchNestedUser();

      const camelized = camelizeKeys(data) as any;
      const user = new NestedUserModel(camelized);

      console.log(user);

      setNestedUser(user);
      setIsLoading(false);
    })();
  }, []);
  const { fullName } = nestedUser || {};

  return (
    <div className="App">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            Fetched:
            <div>
              <div>First Name: {nestedUser?.firstName}</div>
              <div>Last Name: {nestedUser?.lastName}</div>
              <div>Full Name: {fullName}</div>
              <div>Address: {JSON.stringify(nestedUser?.address)}</div>
            </div>
          </div>
        )}
      </div>
      <br />
      <label>First Name: &nbsp;</label>
      <input
        onChange={(e) => {
          setNestedUser(
            produce((draft) => {
              if (draft) {
                draft.firstName = e.target.value;
              }
            })
          );
        }}
      />
    </div>
  );
}
