export const currentMoment = (id) => {
  const format = id.toLocaleTimeString();

  let currentMoments;
  const time = format?.split(":")[0];
  if (format?.includes("PM")) {
    if (
      time === "12" ||
      time === "1" ||
      time === "2" ||
      time === "3" ||
      time === "4" ||
      time === "5"
    ) {
      currentMoments = "Good Afternoon ";
    } else {
      currentMoments = "Good Evening";
    }
  } else {
    currentMoments = "Good Morning";
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
  const splitDate = id?.split("/");

  const date =
    splitDate &&
    month[splitDate[0] - 1] + " " + splitDate[1] + ", " + splitDate[2];

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
