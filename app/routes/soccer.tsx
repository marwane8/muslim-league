import { useState } from "react";

export default function Soccer() {
  const [loading, setLoaded] = useState(true);

  return (
    <>
      {loading && (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="h-1/2">
            <span className="loading loading-spinner loading-lg text-gray-900" />
          </div>
        </div>
      )}
      <iframe
        src="https://www.proleagues.io/mslct/games"
        title="ProLeagues MSLCT Games"
        className="h-screen w-full"
        onLoad={() => setLoaded(false)}
      />
    </>
  );
}
