export const getUserAgent = async (userIp: string) => {
  if (!userIp) return new Error("User IP is not defined");
  try {
    const request = await fetch(`https://ipapi.co/${userIp}/json/`);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error("Error adding tracking:", error);
  }
};
