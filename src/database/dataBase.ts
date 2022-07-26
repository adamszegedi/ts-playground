interface DataBase {
  get(record: string): string,
  set(record: string, value: string): void
}


class InMemoryDatabase implements DataBase {
  //without this it would be possible to override the db without the set method
  protected db: Record<string, string> = {};

  get(id: string): string{
    return this.db[id];
  }

  set(id: string, value: string): void{
    this.db[id] = value;
  }
}

const inMemoryDatabase = new InMemoryDatabase();

inMemoryDatabase.set("hello", "world");

inMemoryDatabase.get("hello");

//Property 'db' is protected and only accessible within class 'InMemoryDatabase' and its subclasses.ts(2445)
//inMemoryDatabase.db["hello"];


export interface Persistable {
  saveToString(): string,
  restoreFromString(storedData: string): void
}

export class PersistableDataBase extends InMemoryDatabase implements Persistable{
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedData: string): void {
    this.db = JSON.parse(storedData);
  }
}

const persistableDataBase = new PersistableDataBase();

persistableDataBase.set("foo", "bar");
persistableDataBase.set("fizz", "buzz");



console.log(`foo: ${persistableDataBase.get('foo')}`);
const stringToPersist = persistableDataBase.saveToString();

const newPersistableDataBase = new PersistableDataBase();

newPersistableDataBase.restoreFromString(stringToPersist);

console.log(`New foo: ${newPersistableDataBase.get('foo')}`);
console.log(`New and old equal: ${newPersistableDataBase.get('foo')=== persistableDataBase.get('foo')}`);