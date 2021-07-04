import { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useParams } from 'react-router';
import { Row, Col } from 'antd';
import {Link } from 'react-router-dom';
import { Card } from 'antd';
import { Space } from 'antd';
import { Image } from 'antd';



const { Title } = Typography;
const {Meta}=Card;

const ArticlesCard=({article})=>{

  const articleUrl=`/article/${article.id}`;
  return(

    <Space align="center" direction='horizontal' size="large" style={{margin:20}}>
    <Card
        style={{ width: 300 }}
      >
        <Meta
          title={article.title}
          description={article.description}
        />
        <br/>
        <Link to={articleUrl} key="setting">Read More..</Link>
      </Card>
    
      </Space>

  )
}


const Articles=({articleDetails})=>{

  const Cards=articleDetails.map((obj,i)=>{
    return <ArticlesCard article={obj} key={i}/>
})


  function renderArticles(){

   
        return(

            <>
        <Title level={2}>All Articles</Title>
            {Cards}

            </> 
           
    )

  }

 return renderArticles();
    
  }


  export default Articles;