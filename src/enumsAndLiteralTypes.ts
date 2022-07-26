enum LoadingState {
  before = "beforeLoad",
  loading = "loading",
  loaded = "loaded"
}

const isLoading = (state: LoadingState) => {
  return state === LoadingState.loading;
};

console.log(isLoading(LoadingState.loaded));
console.log(isLoading(LoadingState.loading));


enum IntegrationType {
  CURRENCIES_API = 'CURRENCIES_API',
  TIMEZONE_API = 'TIMEZONE_API',
  PAYMENT_GATE = 'PAYMENT_GATE',
}

type IntegrationTypeResponse = {
  [key in IntegrationType]: boolean
}


const ApiResponses: Pick<IntegrationTypeResponse, IntegrationType.TIMEZONE_API> = {
  TIMEZONE_API: false
};


console.log(ApiResponses);