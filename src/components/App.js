import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About image="my-blog-logo.jpg" about="Welcome to my blog!" />
      <ArticleList
        posts={[
          { title: "Post 1", date: "February 2, 2022", preview: "This is the preview of post 1" },
          { title: "Post 2", date: "March 3, 2022", preview: "This is the preview of post 2" },
          { title: "Post 3", preview: "This is the preview of post 3" },
        ]}
      />
    </div>
  );
}

export default App;