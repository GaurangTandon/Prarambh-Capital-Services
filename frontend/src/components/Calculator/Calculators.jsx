import {
  faChartLine,
  faMoneyBillTrendUp,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import LumpsumCalculator from "./LumpsumCalculator";
import SIPCalculator from "./SIPCalculator";
import SWPCalculator from "./SWPCalculator";

const calculators = [
  {
    id: "sip",
    name: "SIP Calculator",
    icon: faChartLine,
    component: SIPCalculator,
  },
  {
    id: "swp",
    name: "SWP Calculator",
    icon: faMoneyBillTrendUp,
    component: SWPCalculator,
  },
  {
    id: "lumpsum",
    name: "Lumpsum Calculator",
    icon: faMoneyBillWave,
    component: LumpsumCalculator,
  },
];

export default calculators;
