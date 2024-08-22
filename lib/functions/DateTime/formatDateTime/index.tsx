import { formatDistanceToNow } from "date-fns";

const formatDateTime = (dateTimeString: string) => {
  let formattedDate = "Invalid Date";
  let formattedTime = "Invalid Time";
  let relativeTime = "Invalid Time";

  try {
    // Parse the date string to a Date object
    const date = new Date(dateTimeString);

    if (!isNaN(date.getTime())) {
      // Extract components
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Months are 0-based
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      // Format components
      formattedDate = `${year}-${month}-${day}`;
      formattedTime = `${hours}:${minutes}:${seconds}`;

      // Calculate the relative time (e.g., "3 days ago")
      relativeTime = formatDistanceToNow(date, { addSuffix: true });


      return { formattedDate, formattedTime, relativeTime };
    }
  } catch (error) {
    console.error("Error parsing date:", dateTimeString, error);
  }
};

export default formatDateTime;
