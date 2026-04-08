export default function Resume() {
  const URL =
    "https://drive.google.com/file/d/1zoP96k1PKyJrVtu1YDyZmDIevc5qv1Wa/preview";
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 py-10">
      <h1 className="text-2xl font-extrabold">Resume</h1>
      <p className="text-lg">View or download my professional resume.</p>
      <hr className="border-t border-gray-300" />
      <div className="w-full h-screen rounded-lg overflow-hidden shadow-md border">
        <iframe
          src={URL}
          title="My Professional Resume"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
