"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubHeatmap() {
  return (
    <>
      <h2 className="text-2xl font-bold">Github contributions</h2>

      <GitHubCalendar
        username="Rafay74"
        fontSize={14}
        year="last"
        colorScheme="light"
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
      />
    </>
  );
}
