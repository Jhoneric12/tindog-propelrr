import { useMemo } from "react";
import { formatList } from "../helpers/formatData";
import dayjs from "dayjs";
import { dateFormats } from "../constants";

// FOR FORMATTING DATA IN TABLE

export const useConfirmedTimeSlots = (selectedExhibitor) => {
  return useMemo(() => {
    if (!selectedExhibitor?.timeSlots) return [];

    return selectedExhibitor.timeSlots
      .filter((time) => time?.attendee?.status === "CONFIRMED")
      .map((time) => ({
        ...time,
        companyName: selectedExhibitor?.companyName,
        date: dayjs(time?.startTime).format(dateFormats["MMMM D, YYYY"]),
        startTime: dayjs(time?.startTime).format(dateFormats["hh:mm A"]),
        endTime: dayjs(time?.endTime).format(dateFormats["hh:mm A"]),
        fullName: `${formatList(time?.attendee?.firstName)} ${formatList(
          time?.attendee?.lastName
        )}`,
        lastName: formatList(time?.attendee?.lastName),
        email: formatList(time?.attendee?.email),
        mobileNumber: formatList(time?.attendee?.mobileNumber),
        company: formatList(time?.attendee?.company),
        position: formatList(time?.attendee?.position),
        purpose: formatList(time?.attendee?.purpose),
        message: formatList(time?.attendee?.message),
      }));
  }, [selectedExhibitor?.timeSlots]);
};
