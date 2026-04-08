import { BOOKS } from "../utils/data";

export default function Books() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 py-10">
      <h1 className="text-2xl font-extrabold">Books</h1>

      <p className="text-lg">A collection of all the books I have read</p>
      <hr className="border-t border-gray-300" />

      <div className="grid grid-cols-2 gap-10">
        {BOOKS.map((book, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-gray-50 p-4 cursor-pointer">
              <p className="text-md leading-relaxed text-neutral-900">
                {book?.book_name}
              </p>
              <span className="text-sm text-neutral-400">- {book?.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
