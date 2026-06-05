import { useEffect, useState } from "react";

// SAMPLE USAGE
// const { searchDataSource, setSearchDataSource } = useGetTableData(data);

export const useGetTableData = (data) => {
  const [searchDataSource, setSearchDataSource] = useState([]);
  useEffect(() => {
    if (Array.isArray(data?.data)) {
      setSearchDataSource([...data.data]);
    } else {
      setSearchDataSource([]);
    }
  }, [data]);

  return { searchDataSource, setSearchDataSource };
};

export const useGetMeetingTableData = (data) => {
  const [meetingDataSource, setMeetingDataSource] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setMeetingDataSource(data);
    } else {
      setMeetingDataSource([]);
    }
  }, [data]);

  return { meetingDataSource, setMeetingDataSource };
};
