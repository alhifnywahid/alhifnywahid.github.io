function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col bg-slate-900">
        <div className="-mt-24 md:ml-3 ml-0 flex justify-center m-5">
          <img
            className="absolute md:h-32 md:w-32 w-24 h-24 scale-[1.23]"
            src="/background.png"
          />
          <img
            className="md:h-32 md:w-32 w-24 h-24 dark:shadow-blue-500/80 dark:shadow-center rounded"
            src="/profile.webp"
          />
        </div>
        <span className="dark:text-slate-50 text-2xl font-bold">
          Alhifny Wahid
        </span>
        <p className="text-1xl text-white">Front End - Developer</p>
      </div>
    </>
  );
}

export default App;
