import { THOUGHTS } from "../utils/data";

export default function Thoughts() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 py-10">
      <h1 className="text-2xl font-medium tracking-tight">Thoughts</h1>

      <p className="text-lg">My random thoughts.</p>

      <div className="flex flex-col gap-10">
        {THOUGHTS.map((thought, index) => (
          <div key={index} className="space-y-2">
            <div className="text-sm text-neutral-400 text-right px-4 ">
              {thought.date}
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-gray-50 p-4 ">
              <p className="text-md leading-relaxed text-neutral-900 italic">
                {thought.text}
              </p>
              <span className="text-sm text-neutral-400 text-right">
                {thought.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
