import React from "react";

export default function Header() {
  const time = () => {
    return `${Intl.DateTimeFormat([], {
      hour12: true,
      timeStyle: "medium",
    }).format(Date.now())} (${
      Intl.DateTimeFormat().resolvedOptions().timeZone
    })`;
  };

  return (
    <div className="w-100 header">
      <div className="container d-flex justify-content-between py-3 align-items-center">
        <div className="h3">Cat Tracker</div>
        <div className="h6">
          <div className="fw-bold">Current time</div>
          <div className="mt-1 fw-normal">{time()}</div>
        </div>
      </div>
    </div>
  );
}
