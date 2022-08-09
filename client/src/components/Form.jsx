import moment from "moment-timezone";
import React, { useState } from "react";
import { addCat, updateCat } from "../services/api";

export default function Form({ mode, cat, cancel, zones }) {
  const [formData, setFormData] = useState({
    name: cat?.name || "",
    color: cat?.color || "",
    timeZone: cat?.timeZone || "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInput = ({ target: { name, value } }) => {
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.color || !formData.timeZone) {
      setError("Please fill all the required fields");
      return;
    }
    setError("");
    try {
      const result =
        mode === "edit"
          ? await updateCat({ id: cat?.id, timeZone: formData.timeZone })
          : await addCat({ cat: { ...formData } });
      if (result) {
        setSuccess(
          `${formData.name} was ${
            mode === "edit" ? "updated" : "added"
          } successfully!`
        );
        setTimeout(() => {
          cancel(true);
        }, 2500);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-white rounded mt-3 p-3">
      <div className="row gx-3 gx-sm-5">
        <div className="col">
          <label className="form-label">
            Name <sup className="text-danger">*</sup>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleInput}
            name="name"
            className="form-control shadow-sm"
            disabled={mode === "edit"}
            required
          />
        </div>
        <div className="col">
          <label className="form-label">
            Color <sup className="text-danger">*</sup>
          </label>
          <input
            type="text"
            value={formData.color}
            onChange={handleInput}
            name="color"
            className="form-control shadow-sm"
            disabled={mode === "edit"}
            required
          />
        </div>
      </div>
      <div className="row gx-5 mt-2">
        <div className="col">
          <label className="form-label">
            Time Zone <sup className="text-danger">*</sup>
          </label>
          <select
            className="form-select shadow-sm"
            value={formData.timeZone}
            onChange={handleInput}
            name="timeZone"
            required
          >
            {zones.map((zone) => {
              return (
                <option key={zone.zone} value={zone.zone}>
                  {`${zone.zone} ${zone.offset}`}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {error && <div className="text-danger ms-auto my-2">{error}</div>}
      {success && <div className="text-success ms-auto my-2">{success}</div>}
      <div className="d-flex justify-content-end mt-4">
        <button
          onClick={cancel}
          className="btn btn-secondary d-flex align-items-center me-2"
        >
          <span className="material-icons me-2">block</span> Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="btn btn-success d-flex align-items-center"
        >
          <span className="material-icons me-2">check</span> Save
        </button>
      </div>
    </div>
  );
}
