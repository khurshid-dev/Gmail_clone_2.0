import React from "react";

const Badge = (initialNumber) => {
  return (
    <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
      {initialNumber}
    </div>
  );
};

export default Badge;
