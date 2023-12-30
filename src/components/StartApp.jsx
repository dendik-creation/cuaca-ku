import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export const StartApp = (props) => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshow(true);
      setTimeout(() => {
        setshow(false);
        props.isLoading(false);
      }, 3000);
    }, 250);
  }, []);
  return (
    <>
      <Transition
        show={show}
        enter="transform transition duration-[300ms] delay-[500ms]"
        enterFrom="opacity-0 scale-110"
        enterTo="opacity-100 scale-100"
        leave="transform duration-[300ms] transition ease-in-out"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
        className="flex flex-col justify-center items-center gap-6 mb-20 h-full"
      >
        <i className="fa-solid fa-cloud-sun-rain text-blue-custom-950 text-7xl fa-fade"></i>
        <div className="text-center">
          <h2 className="text-5xl mb-2 font-semibold text-blue-custom-950">
            Cuaca-Ku
          </h2>
          <span className="text-xl font-medium text-blue-custom-950">
            Aplikasi Cuaca Sederhana React
          </span>
        </div>
      </Transition>
    </>
  );
};
