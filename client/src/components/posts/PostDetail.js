import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { postService } from '../../services/api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getPost(id);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        By {post.author.username}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Box>
    </Container>
  );
};

export default PostDetail;
