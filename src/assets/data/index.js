import People1 from "../img/testimonial/people-1.jpg";
import People2 from "../img/testimonial/people-2.jpg";
import People3 from "../img/testimonial/people-3.jpg";

import Wpa from "../img/product/gear-revco/gear-wpa.jpeg";
import Wps from "../img/product/gear-revco/gear-wps.jpeg";
import Wpo from "../img/product/gear-revco/gear-wpo.jpeg";
import Wpx from "../img/product/gear-revco/gear-wpx.jpeg";
import Wpda from "../img/product/gear-revco/gear-wpda.jpeg";
import Fcl from "../img/product/gear-revco/coupling-fcl.jpeg";
import Chain from "../img/product/gear-revco/coupling-chainCoupling.jpeg";
import Jtc from "../img/product/gear-revco/coupling-jtc.jpeg";
import GearDetail from "../img/product/gear-revco/gear-detail.jpeg";
import WpdaDetail from "../img/product/gear-revco/wpda-detail.jpeg";
import FclDetail from "../img/product/gear-revco/fcl-detail.jpeg";
import JtcDetail from "../img/product/gear-revco/jtc-detail.jpeg";
import ChainDetail from "../img/product/gear-revco/chain-detail.jpeg";


import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "product",
    text: "Product",
  },
  {
    id: 3,
    path: "about",
    text: "About Us",
  },
  {
    id: 4,
    path: "contact",
    text: "Contact",
  },
];

export const serviceFeature = [
  {
    id: 1,
    icon: faAward,
    feature: "Quality Assurance",
    desc: "We source our parts from trusted manufacturers known for their quality and reliability.",
  },
  {
    id: 3,
    icon: faTruckFast,
    feature: "Fast Shipping",
    desc: "We know that time is of the essence when it comes to vehicle maintenance and repairs. ",
  },
  {
    id: 4,
    icon: faAward,
    feature: "Competitive Prices",
    desc: "We offer competitive prices on all of our parts, so you can save money without sacrificing quality.",
  },
];

export const spareParts = [
  {
    id: 1,
    category: "Gear",
    name: "WPA Worm Gear",
    image: Wpa,
    image2: GearDetail,
  },
  {
    id: 2,
    category: "Gear",
    name: "WPS Worm Gear",
    image: Wps,
    image2: GearDetail,
  },
  {
    category: "Gear",
    id: 3,
    name: "WPO Worm Gear",
    image: Wpo,
    image2: GearDetail,
  },
  {
    id: 4,
    category: "Gear",
    name: "WPX Worm Gear",
    image: Wpx,
    image2: GearDetail,
  },
  {
    id: 5,
    category: "Gear",
    name: "WPDA Worm Gear",
    image: Wpda,
    image2: WpdaDetail,
  },
  {
    id: 6,
    category: "Coupling",
    name: "Coupling FCL",
    image: Fcl,
    image2: FclDetail,
  },
  {
    id: 7,
    category: "Coupling",
    name: "Coupling Jtc",
    image: Jtc,
    image2: JtcDetail,
  },
  {
    id: 8,
    category: "Coupling",
    name: "Chain Coupling",
    image: Chain,
    image2: ChainDetail,
  },
  {
    id: 9,
    category: "Coupling",
    name: "Chain Coupling",
    image: Chain,
    size: "saasd",
    ration: "asdasd",
  },
  {
    id: 10,
    category: "Coupling",
    name: "Chain Coupling",
    image: Chain,
    size: "saasd",
    ration: "asdasd",
  },
  {
    id: 11,
    category: "Coupling",
    name: "Chain Coupling",
    image: Chain,
    size: "saasd",
    ration: "asdasd",
  },
];

export const testimonial = [
  {
    id: 1,
    company: "ABC Trucking Company",
    location: "Chicago, IL",
    testimonial:
      "Heavy Parts Hub has been our go-to source for quality spare parts for our fleet of trucks. We highly recommend them to anyone in the heavy vehicle industry.",
    image: People1,
    name: "John D.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    company: "Big Rig Repair Shop",
    location: "Dallas, TX",
    testimonial:
      "Their fast shipping, reliable quality, and expert support make them my preferred supplier for heavy vehicle spare parts.",
    image: People2,
    name: "Sarah L.",
  },
  {
    id: 3,
    name: "David Brown",
    company: "Transport Solutions Inc.",
    location: "Miami, FL",
    testimonial:
      "Their commitment to quality and their extensive product range make them a trusted partner in our business.",
    image: People3,
    name: "Michael R.",
  },
  {
    id: 4,
    name: "Sarah Garcia",
    company: "Garcia Trucking Services",
    location: "Los Angeles, CA",
    testimonial:
      "Heavy Parts Hub has been instrumental in helping us keep our fleet of trucks on the road. Their knowledgeable staff and top-notch customer service make ordering parts a breeze.",
    image: People1,
    name: "Emily H.",
  },
  {
    id: 5,
    company: "Garcia Trucking Services",
    location: "Los Angeles, CA",
    testimonial:
      "Heavy Parts Hub has been instrumental in helping us keep our fleet of trucks on the road.",
    image: People2,
    name: "David M.",
  },
  {
    id: 6,
    company: "Garcia Trucking Services",
    location: "Los Angeles, CA",
    testimonial:
      "Their knowledgeable staff and top-notch customer service make ordering parts a breeze. Plus, their competitive prices help us stay within budget without sacrificing quality.",
    image: People3,
    name: "Mike T.",
  },
  {
    id: 7,
    company: "Garcia Trucking Services",
    location: "Los Angeles, CA",
    testimonial:
      "Their competitive prices help us stay within budget without sacrificing quality.",
    image: People1,
    name: "Jessica H.",
  },
];
