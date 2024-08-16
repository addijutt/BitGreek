import React, { useEffect, useState } from 'react';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';

type Article = {
    title: string;
    description: string;
    author: string | null;
    url: string;
    updated_at: number;
    news_site: string;
    thumb_2x: string | null;
};

const LatestArticles: React.FC = () => {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:4000/api/cryptocurrency/news')
            .then(response => response.json())
            .then(data => {
                setNews(data.data.slice(0, 4)); // Show only the first 4 articles
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setError('Failed to fetch articles');
                setLoading(false);
            });
    }, []);

    const formatDate = (timestamp: number) => {
        const date = fromUnixTime(timestamp);
        return formatDistanceToNow(date, { addSuffix: true });
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger my-5" role="alert">
                Error: {error}
            </div>
        );
    }

    return (
        <>
            {news.map((item, index) => (
                <a href={item.url} key={index} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="news-card">
                        <div className="row justify-content-between">
                            <div className="col-8">
                                <h6 className='mb-4'>{item.title}</h6>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="tag">{item.news_site} </div> 
                                    <p className='mb-0'>
						{item.author && <>. {item.author}</>} . {formatDate(item.updated_at)}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-4">
                                <img 
                                    src={item.thumb_2x || 'assets/placeholder.png'} 
                                    className='w-100 news-img' style={{borderRadius: "12px"}} 
                                    alt={item.title || 'Article image'} 
                                />
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </>
    );
};

export default LatestArticles;
