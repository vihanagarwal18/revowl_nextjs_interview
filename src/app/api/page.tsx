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

const Card = styled.div`
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Card onClick={toggleContent}>
            <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: 'auto' }} />
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>{article.description}</p>
            {isOpen && <p>{article.content}</p>}
        </Card>
    );
};

export default function Fetch() {
    const [data, setData] = useState<NewsApiResponse | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-26&sortBy=publishedAt&apiKey=3bc376ffe7874e589d054ad1cd22a58e')
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
            {data && data.articles.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </div>
    );
}
