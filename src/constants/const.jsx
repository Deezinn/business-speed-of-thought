import { ImHome, ImVideoCamera, ImEyePlus } from "react-icons/im";

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

export const billImages = [
  bill_inovates, bill_mocks_ai, interview_bill
]
