import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);
  const refresh = async () => {
    const res = await axios.get(`${BASE_URL}/content`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    setContents(res.data.contents);
  };

  useEffect(() => {
    refresh();
  }, []);
  return { contents, refresh };
}
