import { useParams } from "react-router-dom";
// import { useFetch } from "./useFetch";

const BlogDetails = () => {
  // const { id } = useParams();
  const { john } = useParams();
  // console.log(id)
  console.log(john)
  // const { data:blogs, isPending, error } = useFetch(`http://localhost:3001/${id}`);

  return (
    <div className="blog-details">
      <h2>Blog details -</h2>
    </div>
  );
}
 
export default BlogDetails;