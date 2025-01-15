import {
  faChartLine,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import SIPCalculator from "./SIPCalculator";
import SWPCalculator from "./SWPCalculator";

const calculators = [
  {
    id: "sip",
    name: "SIP Calculator",
    icon: faChartLine,
    component: SIPCalculator
  },
  {
    id: "swp",
    name: "SWP Calculator",
    icon: faMoneyBillTrendUp,
    component: SWPCalculator,
  },
];

export default calculators;
