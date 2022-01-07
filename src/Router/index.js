import React, { useState } from "react";
import { Routes, Route, Navigate, Switch } from "react-router-dom";
import Homescreen from "./../Screens/Home/Home";
import NotFound from "./../NotFound";
import { store } from "../Redux/store";
import { setToken } from "../store/common/common";
import { useDispatch } from "react-redux";
import AboutUsScreen from "./../Screens/About/About";
import FaqScreen from "./../Screens/Faq/Faq";
import ContactUs from "./../Screens/ContactUs/Contact";
import ServiceScreen from "./../Screens/Services/Services";
import PrivacyScreen from "./../Screens/Privacy/Privacy";
import Termsconditions from "./../Screens/TermsConditions/TermsConditions";
import Dashboard from "./../Screens/Dashboard/Dashboard";
import PostAJob from "./../Screens/PostJob/PostAJob";
import GroupProfile from "./../Screens/GroupProfile/groupProfile";
import SearchCandidate from "./../Screens/SearchCandidate/SearchCandidate";
import CandidateSaved from "./../Screens/CandidateSaved/CandidateSaved";
import CandidateInvited from "./../Screens/CandidateInvited/CandidateInvited";
import CandidateInvitedDeno from "./../Screens/CandidateInvited/CandidateInvitedDemo2";
import CandidateSavedDemo from "./../Screens/CandidateSaved/CandidateSavedDemo2";
import ApplicationReceived from "./../Screens/ApplicationReceived/ApplicationReceived";
import ApplicationReceivedDemo from "./../Screens/ApplicationReceived/ApplicationReceivedDemo2";
import CandidateSuggestions from "./../Screens/CandidateSuggestions/CandidateSuggestions";
import CandidateSuggestionsDemo from "./../Screens/CandidateSuggestions/CandidateSuggestionsDemo2";
import useToken from "../Auth/useToken";
function RouterScreen() {
  const dispatch = useDispatch();
  const [loginMutate, setLoginMutate] = useState(null);
  const token = localStorage.getItem("jietoken");
  if (!store.getState().common.token && !!token) {
    dispatch(setToken(token));
  }
  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <Homescreen />}
        exact
      />
      <Route path="/about" element={<AboutUsScreen />} />
      <Route path="/faq" element={<FaqScreen />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<ServiceScreen />} />
      <Route path="/privacy" element={<PrivacyScreen />} />
      <Route path="termsconditions" element={<Termsconditions />} />
      <Route element={<NotFound to="/404" />} path="*" />

      {/* Logged IN User Route */}

      <Route
        path="/dashboard"
        element={
          <main role="main" className="wrapper">
            <Dashboard
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        path={"/postjob"}
        element={
          <main role="main" className="wrapper">
            <PostAJob
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/searchcandidate"}
        element={
          <main role="main" className="wrapper">
            <SearchCandidate
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/candidate-saved"}
        element={
          <main role="main" className="wrapper">
            <CandidateSaved
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/candidate-saved-demo"}
        element={
          <main role="main" className="wrapper">
            <CandidateSavedDemo
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/candidate-suggestions"}
        element={
          <main role="main" className="wrapper">
            <CandidateSuggestions
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/candidate-suggestions-demo"}
        element={
          <main role="main" className="wrapper">
            <CandidateSuggestionsDemo
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/candidate-invited"}
        element={
          <main role="main" className="wrapper">
            <CandidateInvited
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/candidate-invited-demo"}
        element={
          <main role="main" className="wrapper">
            <CandidateInvitedDeno
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/application-received"}
        element={
          <main role="main" className="wrapper">
            <ApplicationReceived
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/application-received-demo"}
        element={
          <main role="main" className="wrapper">
            <ApplicationReceivedDemo
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
      <Route
        exact
        path={"/GroupProfile"}
        element={
          <main role="main" className="wrapper">
            <GroupProfile
              token={token}
              setToken={null}
              removeToken={null}
              setLoginMutate={setLoginMutate}
            />
          </main>
        }
      />
    </Routes>
  );
}
export default RouterScreen;
