import dayjs from "dayjs";
import { dateFormats } from "../constants";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);
dayjs.extend(advancedFormat);

export const formatDate = (date = []) => {
  if (!date) return;

  // const formatEventDate = date?.join(";");
  const eventDate = date.split(";");
  if (eventDate.length > 1) {
    const month = dayjs(eventDate[0]).format("MMMM");
    const year = dayjs(eventDate[0]).format("YYYY");
    // const dates = eventDate.map((date) => dayjs(date).format("D"));
    const firstDate = dayjs(eventDate[0]).format("D");
    const lastDate = dayjs(eventDate[eventDate.length - 1]).format("D");
    const lastIndexMonth = dayjs(eventDate[eventDate.length - 1]).format("MMMM");
    const firstIndexYear = dayjs(eventDate[0]).format("YYYY");
    const lastIndexYear = dayjs(eventDate[eventDate.length - 1]).format("YYYY");

    if (month !== lastIndexMonth) {
      return `${month} ${firstDate} - ${lastIndexMonth} ${lastDate}, ${lastIndexYear}`;
    } else if (firstDate === lastDate) {
      return `${month} ${firstDate} , ${lastIndexYear}`;
    } else if (firstIndexYear !== lastIndexYear) {
      return `${month} ${firstDate}, ${firstIndexYear} - ${lastIndexMonth} ${lastDate}, ${lastIndexYear}`;
    }
    return `${month} ${firstDate} - ${lastDate}, ${lastIndexYear}`;
  } else {
    return dayjs(eventDate).format("MMMM D, YYYY");
  }
};

export const formatDateSeries = (dateSeries) => {
  if (!dateSeries) return;
  const dates = dateSeries.split(";");
  const formattedDateSeries = [
    dayjs(dates[0]).format(dateFormats["YYYY-MM-DD HH:mm"]),
    dayjs(dates[dates?.length - 1]).format(dateFormats["YYYY-MM-DD HH:mm"]),
  ];
  // console.log("format", formattedDateSeries);
  return formattedDateSeries;
};

export const allDateSeries = (dateSeries) => {
  if (!dateSeries) return;

  if (!dateSeries || dateSeries.length < 2) return;

  const startDate = dayjs(dateSeries[0]);
  const endDate = dayjs(dateSeries[1]);

  const allDates = [];
  let current = startDate;

  while (current.isSameOrBefore(endDate, "day")) {
    allDates.push(current.format(dateFormats["YYYY-MM-DD"]));
    current = current.add(1, "day");
  }

  return allDates.join(";");
};

export const formatDatePicker = (currentDate, allowedDates = []) => {
  if (!currentDate) return false;

  const allowedDateSet = new Set(allowedDates);
  const formatted = currentDate.format(dateFormats["YYYY-MM-DD"]);

  return !allowedDateSet.has(formatted) || currentDate.isBefore(dayjs().startOf("day"));
};

export const formatTimeSlot = (selectedDate, time) => {
  return `${dayjs(selectedDate).format(dateFormats["YYYY-MM-DD"])} ${dayjs(time).format(
    dateFormats["HH:mm:ss"]
  )}`;
};
