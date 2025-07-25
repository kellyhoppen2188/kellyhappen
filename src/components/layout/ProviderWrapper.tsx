"use client";
import store, { persistor } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PreLoader from "./PreLoader";

const ProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<PreLoader />}
        persistor={persistor}
        onBeforeLift={() => {
          console.log("Redux state rehydrated");
        }}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
