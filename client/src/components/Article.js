import { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useParams } from 'react-router';
import { Row, Col } from 'antd';
import {Link } from 'react-router-dom';
import { Card } from 'antd';
import { Space } from 'antd';
import { Image } from 'antd';
import { Comment, Tooltip, Avatar } from 'antd';
import { Tag } from 'antd';




const { Title } = Typography;
const {Meta}=Card;


const AddTags=({tag})=>{
return(
<Tag strong level={5}>{tag.name}</Tag>

)
  
}

const AddComments=({comment})=>{

  return(
    <Comment style={{background:'lightgray',padding:5,borderRadius:'5px',margin:10,marginTop:20}}
    author={<a>Han Solo</a>}
    content={
      <p>
        {comment.content}
      </p>
    }
  />
  )
}



const RelatedArticle=({article})=>{

    const articleUrl=`/article/${article.id}`;
  
  return(
    <>
<Space align="center" direction='horizontal' size="large" style={{margin:20}}>
      <Card key={article.id} >
    <Meta title={article.title} description={<Link to={articleUrl}>Go to article</Link>} />
  </Card>

  </Space>


     </> 
    
  )
  
      
  }


const Article=({articles,tags,comments})=>{

    const smallCards=articles.map((obj,i)=>{
        return <RelatedArticle article={obj} key={i}/>
    })

    const displayTags=tags.map((obj,i)=>{
      return <AddTags tag={obj} key={i}  />
  })

  const displayComments=comments.map((obj,i)=>{
    return <AddComments comment={obj} key={i} />
})

  const {id}=useParams();
  const [articleDetails,setArticleDetails]=useState({});
    

  useEffect(()=>{

        fetch(`/articles/${id}`)
          .then(res => 
            res.json())
          .then(data => {  
            setArticleDetails(data);
           })

  },[id]);
  

  function renderArticle(){

        return(

            <>
            <Title level={2} align="center" style={{marginTop:10,marginBottom:30}}>{articleDetails.title}</Title>

            <Title level={4} >{articleDetails.content}</Title>
            <Title level={3} >Tags</Title>
            {displayTags}
            <Title level={3} style={{marginTop:20}} >Comments</Title>
            {displayComments}

            <Title level={2} style={{marginTop:50}}>Related Articles</Title>

            {smallCards}

            </> 
           
    )

  }

 return renderArticle();
    
  }


  export default Article;