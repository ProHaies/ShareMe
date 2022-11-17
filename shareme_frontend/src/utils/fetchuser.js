export const fetchUser = () => {
    const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  const scrollRef = useRef(null);
  return userInfo;
}