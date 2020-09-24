const APP_SECRET = "JBr9JXhBmL3PRXZ";

function getUserId(token: any | null | undefined) {
  const userId = token.userId;
  if (!userId) {
    throw new Error("Not Authorized!");
  }

  return userId;
}

export { APP_SECRET, getUserId };
