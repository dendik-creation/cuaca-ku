import React, { useState } from "react";
import { StartApp } from "./StartApp";
import { ContentApp } from "./ContentApp";
import { Transition } from "@headlessui/react";
export const WeatherMain = () => {
  const [loading, setLoading] = useState(true);
  const handleChange = (data) => {
    setLoading(data);
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="h-[100vh]">
        <div className="bg-slate-100 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <StartApp isLoading={handleChange} />
          <Transition show={!loading}>
            <ContentApp />
          </Transition>
        </div>
      </div>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/solid.min.js"
        integrity="sha512-+fI924YJzeYFv7M0R29zJvRThPinSUOAmo5rpR9v6G4eWIbva/prHdZGSPN440vuf781/sOd/Fr+5ey0pqdW9w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
    </>
  );
};
