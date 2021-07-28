import AboutUs from "../About/AboutUs";
import Main from "../Main/Main";
import Capabilities from "../Capabilities/Capabilities";
import Excellence from "../CenterOfExcellence/Excellence";
import Contracts from "../Contracts/Contracts";
import Careers from "../Careers/Careers";
import Contact from "../Contact/Contact";
import John from "../About/John/John";
import Valerie from "../About/Valerie/Valerie";
import Walter from "../About/Walter/Walter";
import Elline from "../About/Elline/Elline";
import Karen from "../About/Karen/Karen";
import Login from "../SignUp/SignUp";
import Boyd from "../About/Boyd/Boyd";
import Daniel from "../About/Daniel/Daniel";
import Dave from "../About/Dave/Dave";
import Emil from "../About/Emil/Emil";
import Hunter from "../About/Hunter/Hunter";
import Jennifer from "../About/Jennifer/Jennifer";
import Applied from "../Capabilities/AppliedSciences/Applied";
import FutureForce from "../Capabilities/FutureForce/FutureForce";
import Global from "../Capabilities/GlobalLogistics/Global";
import Hypersonic from "../Capabilities/HypersonicEmerging/Hypersonic";
import HyperCOE from "../CenterOfExcellence/HyperCOE/HyperCOE";
import sideNavContent from "../SideNav/Content";
import GlobalCOE from "../CenterOfExcellence/GlobalCOE/GlobalCOE";
import SignIn from "../AWS-Sign-In/SignIn";
import InternalHome from "../InternalSite/InternalHome/InternalHome";
import Calculator from "../InternalSite/InternalCalculator/Calculator";
import Reference from '../InternalSite/Reference/Reference'
import Routing from '../InternalSite/Routing/Routing'
import Managers from "../InternalSite/Manager_Updates/Managers";
import Portal from "../InternalSite/Manager_Updates/Portal";
import Manager_Routes from "../InternalSite/Manager_Updates/Routes/Manager_Routes";

const NavRoutes = [
  {
    component: AboutUs,
    path: "/whoWeAre",
  },
  {
    component: Capabilities,
    path: "/capabilities",
  },
  {
    component: Excellence,
    path: "/CentersOfExcellence",
  },
  {
    component: Contracts,
    path: "/Contracts",
  },
  {
    component: Careers,
    path: "/Careers",
  },
  {
    component: Contact,
    path: "/Contact",
  },
  {
    component: SignIn,
    path: "/Login",
  },
  {
    component: Login,
    path: "/SignIn",
  },
  {
    component: John,
    path: "/John",
  },
  {
    component: Valerie,
    path: "/Valerie",
  },
  {
    component: Walter,
    path: "/Walter",
  },
  {
    component: Elline,
    path: "/Elline",
  },
  {
    component: Karen,
    path: "/Karen",
  },
  {
    component: Boyd,
    path: "/Boyd",
  },
  {
    component: Daniel,
    path: "/Daniel",
  },
  {
    component: Dave,
    path: "/Dave",
  },
  {
    component: Emil,
    path: "/Emil",
  },
  {
    component: Hunter,
    path: "/Hunter",
  },
  {
    component: Jennifer,
    path: "/Jennifer",
  },
  {
    component: Applied,
    path: "/Applied",
  },
  {
    component: FutureForce,
    path: "/Future",
  },
  {
    component: Global,
    path: "/Global",
  },
  {
    component: Hypersonic,
    path: "/Hypersonic",
  },
  {
    component: HyperCOE,
    path: "/HyperCOE",
  },
  {
    component: GlobalCOE,
    path: "/GlobalCOE",
  },
  {
    component: SignIn,
    path: "/SignIn",
  },
  {
    component: InternalHome,
    path: "/Internal",
  },
  {
    component: Calculator,
    path: "/Internal-Calculator",
  },
  {
    component: Reference,
    path: "/Internal-Reference",
  },
  {
    component: Routing,
    path: "/Internal-Routes",
  }
  ,
  {
    component: Managers,
    path: "/Internal-Managers",
  },
  {
    component: Portal,
    path: "/Manager-Portal",
  },
  {
    component: Manager_Routes,
    path: "/Manager-Routes",
  }
];


export default NavRoutes