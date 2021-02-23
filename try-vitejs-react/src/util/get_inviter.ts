export function getInviter() {
  const pathname = window.location.pathname;
  if (pathname === "/") {
    return null;
  }
  return pathname.split("/").pop();
}
