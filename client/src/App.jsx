import moment from "moment-timezone";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Cats from "./components/Cats";
import Form from "./components/Form";
import Header from "./components/Header";
import { getCats } from "./services/api";

const zones = moment.tz.names().map((zone) => {
  return { zone, offset: moment.tz(zone).toString().split(" ")[5] };
});

function App() {
  const [cats, setCats] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState("");
  const [mode, setMode] = useState("");

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = () => {
    getCats().then(({ data }) => {
      setCats([...(data || [])]);
    });
  };

  const enterEditMode = (catId) => {
    setMode("edit");
    setSelectedCatId(catId);
  };

  const handleDelete = (id) => {
    setCats([...cats.filter((c) => c.id !== id)]);
  };

  return (
    <div className="w-100 vh-100 root">
      <Header />
      <div className="container">
        <Cats
          {...{ cats }}
          enterEditMode={enterEditMode}
          onDelete={handleDelete}
        />
        {mode ? (
          <Form
            {...{ zones, mode, cat: cats.find((c) => c.id === selectedCatId) }}
            cancel={(refresh) => {
              setMode("");
              if (refresh) fetchCats();
              setSelectedCatId("");
            }}
          />
        ) : (
          <div>
            <button
              onClick={() => setMode("add")}
              className="btn btn-primary d-flex align-items-center ms-auto"
            >
              <span className="material-icons me-2">add</span> Add cat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
