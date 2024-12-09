export default function SignupCard() {
  return (
    <section
      className="relative flex items-center justify-center text-center p-20 bg-red-600"
      style={{
        backgroundImage: "url('/images/signup.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "scaleX(-1)", // Reverses only the background image
      }}
    >
      {/* Red Background Overlay with reduced opacity */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-600 opacity-70 z-[-1]"></div>

      <div
        className="relative z-10 flex items-center gap-4"
        style={{ transform: "scaleX(-1)" }}
      >
        <h2 className="text-2xl text-white font-bold">
          Make the Smart Move
          <span className="text-[#F2FF8CF7]"> Today!</span>
        </h2>

        {/* Sign Up Button */}
        <button className="bg-white mx-8 text-red-500 px-8 py-3 rounded-tr-xl font-bold">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}
