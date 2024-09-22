import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div>
      <h3>Blog</h3>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
