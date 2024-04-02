"use client";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/redux/store";
import PageWrapper from "@/components/templates/page-wrapper";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
          <div className="flex">
            <Toaster
              toastOptions={{
                className: "md:ml-[240px]",
              }}
            />
           
            <main className="flex-1">
              
                <PageWrapper>{children}</PageWrapper>
             
            </main>
          </div>
        
      </PersistGate>
    </Provider>
  );
}
