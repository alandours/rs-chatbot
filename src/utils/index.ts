export const formatDate = (date: Date) =>
  new Date(date)
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toLowerCase()
    .replace(/\s/, "");
