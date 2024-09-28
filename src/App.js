import { Provider } from "react-redux";
import Routes from "./route/route";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/es/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
