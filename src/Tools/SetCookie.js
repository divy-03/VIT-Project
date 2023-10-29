// Set a cookie using client-side JavaScript
const SetCookie = (name, value, daysToExpire) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export default SetCookie;
