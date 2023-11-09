export const formatDate = (date: string) =>
  new Date(date)
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toLowerCase()
    .replace(/\s/, "");
