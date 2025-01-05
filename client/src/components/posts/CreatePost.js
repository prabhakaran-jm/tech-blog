import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Container } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add post creation logic here
      navigate('/');
    } catch (error) {
      console.error('Post creation error:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          required
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <TextField
          fullWidth
          label="Content (Markdown)"
          multiline
          rows={12}
          margin="normal"
          required
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <TextField
          fullWidth
          label="Tags (comma separated)"
          margin="normal"
          value={post.tags}
          onChange={(e) => setPost({ ...post, tags: e.target.value })}
        />
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button variant="contained" type="submit">
            Publish Post
          </Button>
        </Box>
        <Box sx={{ mt: 4 }}>
          <h3>Preview:</h3>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Box>
      </Box>
    </Container>
  );
};

export default CreatePost;
