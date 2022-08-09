import React from "react";
import { deleteCats } from "../services/api";

export default function Cats({ cats, onDelete, enterEditMode }) {
  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteCats({ id }).then((res) => {
      onDelete(id);
    });
  };

  const getTimeFromTimeZone = (tz) => {
    return Intl.DateTimeFormat([], {
      timeZone: tz,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }).format(Date.now());
  };

  return (
    <div>
      {cats.map((cat) => {
        return (
          <div
            key={cat.id}
            onClick={() => enterEditMode(cat.id)}
            role="button"
            className="bg-white rounded my-2 p-3 shadow-sm"
          >
            <div className="fw-bold h5 d-flex align-items-center justify-content-between">
              <span>{cat.name}</span>
              <button
                onClick={(e) => handleDelete(e, cat.id)}
                className="btn btn-danger d-flex align-items-center"
              >
                <span className="material-icons me-2">close</span>Delete
              </button>
            </div>
            <div>
              <strong>Color:</strong> {cat.color}
            </div>
            <div>
              <strong>Current time:</strong>{" "}
              {`${cat.timeZone} (${getTimeFromTimeZone(cat.timeZone)})`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
