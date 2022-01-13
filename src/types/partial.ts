interface MyUser {
  name: string,
  id: number, 
  email?: string
}

const merge = <T>(user: T, overrides: Partial<T>): T => { return {...user, ...overrides};};

const user1: MyUser = {name: "Bob", id: 123};
const updateUser1: Partial<MyUser> = {email: "user1@mail.eu"};

const mergedUser: MyUser = merge(user1, updateUser1);
console.log(mergedUser);
const validUser: Required<MyUser> = {name: "Steve", id: 1231, email: "adfa@bob.com"};
console.log(validUser);
const userWithoutId: Omit<MyUser, "id"> = {name: "Mike"};
console.log(userWithoutId);
const justId: Pick<MyUser, "id"> = {id: 2131};
console.log(justId);