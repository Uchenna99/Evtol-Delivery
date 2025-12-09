export function timeFromNow(date: string | Date) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const now = new Date();
  const past = new Date(date);

  const diff = (past.getTime() - now.getTime()) / 1000; // seconds negative

  const units = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
    ["second", 1],
  ] as const;

  for (const [unit, secondsInUnit] of units) {
    if (Math.abs(diff) >= secondsInUnit || unit === "second") {
      return rtf.format(Math.round(diff / secondsInUnit), unit);
    }
  }
}
