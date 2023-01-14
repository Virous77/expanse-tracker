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
  const splitDate = id.split("/");

  return month[splitDate[0] - 1] + " " + splitDate[1] + ", " + splitDate[2];
};
