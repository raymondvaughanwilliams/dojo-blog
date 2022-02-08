import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  // const {
  //   data: blogs,
  //   isPending,
  //   error,
  // } = useFetch(`http://localhost:3001/${id}`);
  // console.log(blogs);

  return (
    <div className="blog-details">
      <h2>Blog details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
