function pluck<DataType, KeyType extends keyof DataType>(arr: DataType[], key: KeyType): DataType[KeyType][]{
  return arr.map(item => item[key]);
}

const item_1 = {name: "Tod", bird: true};
const item_2 = {name: "Terence", bird: false};

const rv = pluck([item_1, item_2], "name");
console.log(rv);


interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string};
  checkout: BaseEvent;
}

function sendEvent<eventName extends keyof EventMap>(name: eventName, data: EventMap[eventName]): void {
  console.log([name, data]);
}

sendEvent("addToCart", {time: 1231, user: "hello", quantity: 20, productId: "hewrfs"});
sendEvent("checkout", {time: 1231, user: "hello"});
