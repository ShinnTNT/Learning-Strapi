import useFetch from "../hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch({ key: "reviews" });

  if (loading) return "Loading...";

  if (error) return "Error";

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/4 p-[20px] h-full flex flex-col gap-4 items-center">
        <div className="h-fit text-2xl underline leading-3 text-purple-500 font-extrabold">
          Ninja Reviews
        </div>
        {data.map((item: any) => (
          <div
            className="my-[20px] relative w-full bg-purple-500 h-[120px] rounded-sm p-2"
            key={item.attributes.id}
          >
            <div className="absolute w-[50px] h-[50px] flex justify-center items-center left-[-20px] top-[-20px] bg-white border-purple-500 border-2">
              <p className="text-black h-fit text-md font-bold">{item.id}</p>
            </div>
            <p className="h-fit w-[calc(100% - 50px)] flex justify-between items-center ml-[30px] text-white">
              <div> {item.attributes.title}</div>
              <div>Rating - {item.attributes.rating}</div>
            </p>
            <p className="h-fit text-white mt-3 text-sm">
              {item.attributes.body.substring(0, 200)}...
            </p>
            <p className="w-[80px] h-fit p-1 mt-2 text-white text-sm underline cursor-pointer">
              Read More
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
