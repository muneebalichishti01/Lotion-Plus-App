import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import WriteBox from "./WriteBox";
import Empty from "./Empty";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GoogleOAuthProvider clientId="561468293259-lpkd2rtce61iloecr9460pqrq92u42op.apps.googleusercontent.com">
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Empty />} />
                <Route path="/notes" element={<Empty />} />
                <Route
                  path="/notes/:noteId/edit"
                  element={<WriteBox edit={true} />}
                />
                <Route path="/notes/:noteId" element={<WriteBox edit={false} />} />
                {/* any other path */}
                <Route path="*" element={<Empty />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
    </GoogleOAuthProvider>
  </>
);

reportWebVitals();
