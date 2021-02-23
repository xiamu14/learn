export enum LinkGames {
  SLCB = "slcb",
  YHZD = "yhzd",
  MYZR = "myzr",
}

export const gameDownloadUrl = {
  [LinkGames.SLCB]: "https://lc.leiting.com/download?id=M160139",
  [LinkGames.YHZD]: "https://yhzd.leiting.com/?id=M160140",
  [LinkGames.MYZR]: "https://myzr.leiting.com/?id=M160141",
};

export const canActiveGame = (game: LinkGames, ltGames: string) => {
  if (game === LinkGames.SLCB) {
    return ltGames.includes("lc") || ltGames.includes("slcb");
  }
  return ltGames.includes(game);
};
