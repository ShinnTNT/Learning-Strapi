import { useEffect, useState } from "react";

interface Props {
  key: string;
}

export default function useFetch({ key }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchAPI() {
      await fetch(`http://localhost:1337/api/${key}`)
        .then(async (res: any) => {
          const resBody = await res.json();
          setData(resBody.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    }

    fetchAPI();
  }, [key]);

  return {
    data,
    loading,
    error,
  };
}
