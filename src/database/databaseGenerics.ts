import { Persistable } from "../database/dataBase";

interface GenericDataBase<T, K> {
  get(id: K): T;
  set(id: K, value: T): void; 
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements GenericDataBase<T, K>
{
  protected db: Record<K, T> = {} as Record<K,T>;

  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void{
    this.db[id] = value;
  }
}


const inMemory = new InMemoryDatabase<string, number>();
// These should be errors because the values are strings and the keys are number
// inMemory.set('hello', 'World');
// inMemory.set(123, 1231);
// inMemory.get('Hello');
inMemory.set(123, '234');

console.log(inMemory.get(123));

export class PersistableDataBase<T,K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable{
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedData: string): void {
    this.db = JSON.parse(storedData);
  }
}


const persistableDataBase = new PersistableDataBase<number, string>();
persistableDataBase.set("foo", 123);
persistableDataBase.set("fizz", 123);

console.log(`foo: ${persistableDataBase.get('foo')}`);
const stringToPersist = persistableDataBase.saveToString();

const newPersistableDataBase = new PersistableDataBase();

newPersistableDataBase.restoreFromString(stringToPersist);

console.log(`New foo: ${newPersistableDataBase.get('foo')}`);
console.log(`New and old equal: ${newPersistableDataBase.get('foo')=== persistableDataBase.get('foo')}`);