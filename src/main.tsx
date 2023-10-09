import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme";

const App = () => {
  //  When developing

  // const [mocksLoaded, setMocksLoaded] = useState(false);

  // useEffect(() => {
  //   if (process.env.NODE_ENV === "development") {
  //     import("./mocks").then(() => {
  //       console.log("Mocks loaded");
  //       setMocksLoaded(true);
  //     });
  //   } else {
  //     setMocksLoaded(true);
  //   }
  // }, []);

  // if (!mocksLoaded) return <div>Loading...</div>;

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
};

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
