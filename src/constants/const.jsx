import { ImHome, ImVideoCamera, ImEyePlus } from "react-icons/im";
import { ImBubble2, ImEye, ImShare2 } from "react-icons/im";

import bill_inovates from "@/assets/bill_inovates.webp"
import bill_mocks_ai from "@/assets/bill_mocks_ai.webp"
import interview_bill from "@/assets/interview_with_bill.webp"

export const navbarOptions = [
  {"icone": <ImHome/>, "texto": "Home"},
  {"icone": <ImVideoCamera/>, "texto": "Videos"},
  {"icone": <ImEyePlus/>, "texto": "Insights"}
]

export const optionsCategory = [
  'Politics', 'National', 'International', 'Regulation', 'Business',
  'Finance', 'Health Care', 'Technology', 'Jobs', 'kids'
]

export const billGatesContext = [
  {"image": bill_inovates, "tag": "teste", "text": "lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul ", "icon": <ImEye />, "icon-label": "2.5M"},
  {"image": bill_mocks_ai, "tag": "teste", "text": "lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul ", "icon": <ImEye />, "icon-label": "2.3m"},
  {"image": interview_bill, "tag": "teste", "text": "lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul lorem ipsul ", "icon": <ImEye />, "icon-label": "2.5m"}
]

export const iconOptions = [
  {"icon": <ImEye />, "text": "2.5M"},
  {"icon": <ImBubble2 />, "text": "2.15K"},
  {"icon": <ImShare2 />, "text": "15K"},
]
