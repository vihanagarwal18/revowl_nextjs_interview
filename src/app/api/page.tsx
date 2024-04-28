"use client"
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

interface Article {
    title: string;
    description: string;
    author: string;
    content: string;
    urlToImage:string;

}

interface NewsApiResponse {
    status: string;
    articles: Article[];
}

const AppBar = styled.header`
  background-color: #333; // Dark background similar to card
  color: #fff; // White text
  padding: 10px 20px;
  font-size: 24px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius:10px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #2a2a2a; // Dark background
    color: #ffffff; // White text color
    border: none;
    margin: 10px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    align-items: center; // Align items vertically
`;

const ImageContainer = styled.div`
    flex: 0 0 200px; // Fixed width for the image container
    height: 120px; // Fixed height for the image
    overflow: hidden; // Hide overflow
    border-radius: 5px; // Rounded corners for the image
    margin-right: 20px; // Space between image and text
`;

const ContentContainer = styled.div`
    flex: 1; // Take up remaining space
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Card onClick={toggleContent}>
            <ImageContainer>
                <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </ImageContainer>
            <ContentContainer>
                <h2>{article.title}</h2>
                <p>by {article.author}</p>
                <p>{article.description}</p>
                {isOpen && <p>{article.content}</p>}
            </ContentContainer>
        </Card>
    );
};

// const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleContent = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="card" onClick={toggleContent}>
//             <div className="image-container">
//                 <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//             </div>
//             <div className="content-container">
//                 <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#ffffff' }}>{article.title}</h2>
//                 <p style={{ color: '#ffffff' }}>by {article.author}</p>
//                 <p style={{ marginBottom: '10px', color: '#ffffff' }}>{article.description}</p>
//                 {isOpen && <p style={{ color: '#ffffff' }}>{article.content}</p>}
//             </div>
//         </div>
//     );
// };

export default function Fetch() {
    const [data, setData] = useState<NewsApiResponse | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3bc376ffe7874e589d054ad1cd22a58e')
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "ok") {
                    setData(result);
                } else {
                    setError("There is a problem with the API");
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <AppBar>News</AppBar>
            {data && data.articles.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </div>
    );
}
