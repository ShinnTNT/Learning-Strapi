import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ReviewDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch({ key: `reviews/${id}` });

  if (loading) return "Loading...";

  if (error) return "Error..";

  return (
    <div>
      <p className="text-black h-fit">{data?.attributes?.title}</p>
      <p className="text-black h-fit">{data?.attributes?.body}</p>
    </div>
  );
};

export default ReviewDetail;
