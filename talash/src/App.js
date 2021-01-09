import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import website from "./Website/";
import Login from "./Login/login";
import Signup from "./Login/signup/signup"; //signupOption  hospitalSignup PoliceSignup  OrgSignup
import hospitalSignup from "./Login/signup/hospitalSignup";
import PoliceSignup from "./Login/signup/PoliceSignup";
import OrgSignup from "./Login/signup/OrgSignup";
import signupOption from "./Login/signupOptions";
import ViewPost from "./userportal/ViewPost";
import FileReport from "./userportal/FileReport";
import SearchByImage from "./userportal/SearchByImage";
import myposts from "./userportal/myposts";
import Header from "./Website/Header";
import About from "./mainSite/about";
// import Team from "./mainSite/teams";
import Services from "./mainSite/services";
import ContactUs from "./mainSite/contactUs";
import ViewPostH from "./hospitalportal/ViewPostH";
import SearchByImageh from "./hospitalportal/SearchByImgH";
import ViewPostP from "./policeportal/ViewPostP";
import SearchByImageP from "./policeportal/SearchByImgP";
import ContactFamily from "./policeportal/familylist"; //ContactFamily
import ViewPostOrg from "./OrgPortal/ViewPostOrg";
import SearchByImageOrg from "./OrgPortal/SearchByImgOrg";
import { ProtectedRoute, ProtectedRoute1 } from "./privateRoute/Privateroute";
import { ProtectedRoute2, ProtectedRoute3 } from "./privateRoute/Privateroute";
import Demo from "./mainSite/Demo";
import MissingPoster from "./portal/missingPoster";

import Setting from "./policeportal/setting";
import SettingH from "./hospitalportal/settings";
import SettingO from "./OrgPortal/setting";
import SettingU from "./userportal/setting"; //ContactFamilyU
import ContactFamilyU from "./userportal/contactfamily";
import ContactFamilyH from "./hospitalportal/contactFamily";
import ContactFamilyO from "./OrgPortal/contactFamily";
import SearchReport from "./mainSite/searchReport";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* hospital portal */}
          <ProtectedRoute
            path="/hopitalPortal"
            component={ViewPostH}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/SearchByImageh"
            component={SearchByImageh}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/contactfamilyH"
            component={ContactFamilyH}
          ></ProtectedRoute>
          {/* end of hospital portal */}
          {/* Police portal */}
          <ProtectedRoute2
            path="/PolicePortal"
            component={ViewPostP}
          ></ProtectedRoute2>
          <ProtectedRoute2
            path="/SearchByImageP"
            component={SearchByImageP}
          ></ProtectedRoute2>
          <ProtectedRoute2
            path="/contactfamily"
            component={ContactFamily}
          ></ProtectedRoute2>
          {/* end of Police portal */}
          {/* Org portal */}
          <ProtectedRoute1
            path="/OrgPortal"
            component={ViewPostOrg}
          ></ProtectedRoute1>
          <ProtectedRoute1
            path="/SearchByImageOrg"
            component={SearchByImageOrg}
          ></ProtectedRoute1>
          <ProtectedRoute1
            path="/contactfamilyO"
            component={ContactFamilyO}
          ></ProtectedRoute1>
          {/* end of Org portal */}
          {/* User Portal */}
          <ProtectedRoute3
            path="/viewpost"
            component={ViewPost}
          ></ProtectedRoute3>
          <ProtectedRoute3
            path="/filereport"
            component={FileReport}
          ></ProtectedRoute3>
          <ProtectedRoute3
            path="/searchbyimg"
            component={SearchByImage}
          ></ProtectedRoute3>
          <ProtectedRoute3
            path="/myposts"
            component={myposts}
          ></ProtectedRoute3>
          <ProtectedRoute3
            path="/contactfamilyU"
            component={ContactFamilyU}
          ></ProtectedRoute3>
          {/* end of user portal */}

          <Route path="/poster" component={MissingPoster}></Route>
          <Header>
            <Route exact path="/" component={website}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/hosignup" component={hospitalSignup}></Route>
            <Route path="/Policesignup" component={PoliceSignup}></Route>
            <Route path="/orgsignup" component={OrgSignup}></Route>

            <Route path="/setting" component={Setting}></Route>
            <Route path="/settingH" component={SettingH}></Route>
            <Route path="/settingO" component={SettingO}></Route>
            <Route path="/settingU" component={SettingU}></Route>

            <Route path="/about" component={About}></Route>
            {/* <Route path="/team" component={Team}></Route> */}
            <Route path="/services" component={Services}></Route>
            <Route path="/contact" component={ContactUs}></Route>
            <Route path="/Demo" component={Demo}></Route>

            <Route path="/opt" component={signupOption}></Route>
            <Route path="/SearchR" component={SearchReport}></Route>
          </Header>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
