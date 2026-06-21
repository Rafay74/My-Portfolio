"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubHeatmap() {
  return (
    <>
      <h2 className="text-xl font-bold sm:text-2xl">Github contributions</h2>

      <div className="-mx-1 w-full overflow-x-auto pb-2">
        <div className="min-w-[680px] sm:min-w-0">
          <GitHubCalendar
            username="Rafay74"
            fontSize={12}
            blockSize={10}
            blockMargin={3}
            year="last"
            colorScheme="light"
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            }}
          />
        </div>
      </div>
    </>
  );
}
