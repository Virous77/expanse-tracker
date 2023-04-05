import { ImUserTie } from "react-icons/im";
import {
  MdSportsKabaddi,
  MdCardGiftcard,
  MdFastfood,
  MdCastForEducation,
  MdOutlineBedroomParent,
} from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { SiWish } from "react-icons/si";
import {
  GiTakeMyMoney,
  GiMoneyStack,
  GiElectric,
  GiCommercialAirplane,
} from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";

export const handleIcon = (name) => {
  if (name === "salary") return <GiMoneyStack />;
  if (name === "investing") return <GiTakeMyMoney />;
  if (name === "freelancing") return <ImUserTie />;
  if (name === "sports") return <MdSportsKabaddi />;
  if (name === "gift") return <MdCardGiftcard />;
  if (name === "business") return <TbBusinessplan />;
  if (name === "foods") return <MdFastfood />;
  if (name === "entertainments") return <BiMoviePlay />;
  if (name === "education") return <MdCastForEducation />;
  if (name === "wishes") return <SiWish />;
  if (name === "electronics") return <GiElectric />;
  if (name === "travel") return <GiCommercialAirplane />;
  if (name === "shopping") return <HiOutlineShoppingBag />;
  if (name === "rent") return <MdOutlineBedroomParent />;
};

export const currentMoment = (id) => {
  const hours = id.getHours();

  let currentMoments;

  if (hours >= 5 && hours <= 11) {
    currentMoments = "Good Morning";
  } else if (hours >= 12 && hours <= 17) {
    currentMoments = "Good Afternoon";
  } else {
    currentMoments = "Good Evening";
  }

  return currentMoments;
};

export const month = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (id) => {
  const currentMonth = id?.getMonth();
  const currentDat = id?.getDate();

  const date =
    month[currentMonth] + " " + currentDat + ", " + id?.getFullYear();

  return date;
};

export const formatDate2 = (id) => {
  const splitDate = id?.split("-");

  const date =
    splitDate &&
    month[splitDate[1] - 1] + " " + splitDate[0] + ", " + splitDate[2];

  return date;
};

export const validate = ({ type, input, types, errorSet, formType }) => {
  if (formType === input) {
    if (type !== "others") {
      if (!type || !types.date || !types.amount) {
        errorSet({
          message: "Fill all the field, then proceed!",
          status: "error",
        });
        return "error";
      }
    } else {
      if (!types.others || !types.date || !types.amount) {
        errorSet({
          message: "Fill all the field, then proceed!",
          status: "error",
        });
        return "error";
      }
    }
  }
};

export function convertTimestamp(timestamp) {
  let dd = timestamp?.slice(0, 2);
  let name = +timestamp?.slice(3, 5);
  let names = month[name - 1];
  let yyyy = timestamp?.slice(6, 10);

  const date = dd + " " + names + " " + yyyy;
  return date;
}
