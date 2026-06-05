import dayjs from "dayjs";

export const eventSearch = (allEvents, searchKeys, query) => {
  return allEvents?.filter((event) => {
    return searchKeys.some((key) => event[key]?.toUpperCase().includes(query?.toUpperCase()));
  });
};

// export const unusedTicketSearch = (allEvents, searchKeys, query) => {
//   return allEvents?.filter((event) => {
//     return searchKeys?.some(
//       (key) =>
//         event?.attendee[0]?.event[0][key]?.toUpperCase().includes(query?.toUpperCase()) &&
//         event?.status === "S" &&
//         new Date(event?.attendee[0]?.event[0]?.dateTo) > new Date()
//     );
//   });
// };

export const unusedTicketSearch = (allEvents, searchKeys, query) => {
  if (!Array.isArray(allEvents) || !Array.isArray(searchKeys) || typeof query !== "string") {
    return [];
  }
  return allEvents?.filter((event) => {
    // const attendee = event?.attendee;
    // const eventDetails = attendee?.event;

    if (!allEvents) return false;

    const dateTo = dayjs(event?.dateTo);
    const now = dayjs();

    // if (isNaN(dateTo.valueOf()) || dateTo.isBefore(now)) return false;

    return searchKeys?.some((key) => {
      const value = event[key];
      return (
        value?.toUpperCase()?.includes(query?.toUpperCase()) &&
        event?.status === "S" &&
        dateTo > now
      );
    });
  });
};

// export const unusedTicketExpiredSearch = (allEvents, searchKeys, query) => {
//   return allEvents?.filter((event) => {
//     return searchKeys?.some(
//       (key) =>
//         event?.attendee[0]?.event[0][key]?.toUpperCase().includes(query?.toUpperCase()) &&
//         new Date(event?.attendee[0]?.event[0]?.dateTo) < new Date()
//     );

//     // return result.some((c) => c) && new Date(event?.attendee[0].event[0].dateTo) < new Date();
//   });
// };

export const unusedTicketExpiredSearch = (allEvents, searchKeys, query) => {
  if (!Array.isArray(allEvents) || !Array.isArray(searchKeys) || typeof query !== "string") {
    return [];
  }

  return allEvents.filter((event) => {
    // const attendee = event?.attendee[0];
    // const eventDetails = attendee?.event[0];

    if (!allEvents) return false;

    const dateTo = dayjs(event?.dateTo);
    const now = dayjs();

    // if (isNaN(dateTo.valueOf()) || dateTo.isBefore(now)) return false;

    return searchKeys.some((key) => {
      const value = event[key];
      return (
        value.toUpperCase().includes(query.toUpperCase()) && event?.status === "S" && dateTo < now
      );
    });
  });
};
