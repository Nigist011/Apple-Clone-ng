import React, {useState, useEffect} from "react";



function News() {
    const [AppleNews, addAppleNews] = useState([]);

useEffect(() => {
 fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2021-02-06&to=2021-02-06&sortBy=popularity&apiKey=6712d1c51c654f8da9178466f933bcb5"
    
 )
.then((response)  => response.json())
.then((data) => {
    console.log(data)
    const Mimi = data.articles;
    addAppleNews(Mimi)
})


},[])
console.log(AppleNews)
console.log(AppleNews.slice(0, 6))
 
    return (
        <div className="allNewsWrapper">
            <div className="container">
                <div className="row justify-content text-center">
                    <div className="col-12 news-title-wrapper">
                   
                   Latest News
                    </div>
                   
                    {AppleNews.slice(0, 6).map((singleNews)=> {
                // let newsTitle = singleNews.title;
                let newsLink = singleNews.url;
                let newsImage = singleNews.urlToImage;
                
                let newsWrapper = (
                    <div className="col-sm-12 col-md-4">
                <div className="singleNewsWrapper">
                   
                    <div className="newsThumbnail">
                      <a href={newsLink} target="_blank">
                        <img src={newsImage} />
                      </a>
                    </div>
                <div className="NewsInfoWrapper">
                    <div className="newsTitle"> 
                    <a href={newsLink} target="_blank">
                        {singleNews.title}
                    </a>
                  </div>
                  <div className="newsDesc">
                        {singleNews.description}
                      </div>
                  </div>

                  <div className="newsLink"> 
                    <a href={newsLink} target="_blank">
                    </a>
                  </div>
                  
                 
                   </div>
                 </div>   
                   );
                    return newsWrapper;
                    })}

                </div>

            </div>

        </div>
    )
}

export default News;
















