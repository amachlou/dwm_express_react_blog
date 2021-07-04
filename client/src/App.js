import React from "react";
import logo from "./logo.svg";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';
import User from "./components/Users";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import About from "./components/About";
import Article from "./components/Article";
import 'antd/dist/antd.css';
// import "./App.css";
import { Layout } from 'antd';


function App() {

  const { Header, Footer, Content } = Layout;
  const [data, setData] = React.useState(null);

  const [articles,setArticles]=useState([]);
    
  const [articleDetails,setArticleDetails]=useState([]);


  const [comments,setComments]=useState([]);
const [tags,setTags]=useState([]);


useEffect(()=>{
  fetch(`/tags?offset&limit`)
    .then(res => 
      res.json())
    .then(data => {  
        setTags(data.rows);
     })
});

useEffect(()=>{
  fetch(`/comments?offset&limit`)
    .then(res => 
      res.json())
    .then(data => {  
      setComments(data.rows);
     })
});
    
  useEffect(()=>{

    fetch(`/articles/all`)
      .then(res => 
        res.json())
      .then(data => {  
        setArticleDetails(data);
       })

});

  useEffect(()=>{
        fetch(`/articles?offset&limit`)
          .then(res => 
            res.json())
          .then(data => {  
              setArticles(data.rows);
           })
  });




  return (
    <div>
      
  <Layout>

    <BrowserRouter>
      <Switch>

        <Layout>  
            <Navbar />
 
        <Layout>
            <Content style={{ padding: '30px 50px' }}>

              <Route path="/" exact>
                <Home articles={articles} />         
              </Route>

              <Route path="/user">
                <User />
              </Route>

              <Route path="/article/:id">
                <Article articles={articles} tags={tags} comments={comments} />

              </Route>

              <Route path="/articles">             
                <Articles articleDetails={articleDetails}/>

              </Route>

              <Route path="/about">
                <About/>

              </Route>

            </Content>

        <Layout>
            <Footer align="center">© 2021 Blog</Footer>
        </Layout>

        </Layout>
        </Layout>

      </Switch>
    </BrowserRouter>

  </Layout>
  
    </div>
  );
}

export default App;