const express = require("express");
const axios = require("axios");
const RSSParser = require("rss-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 4000;

const parser = new RSSParser();

// CoinMarketCap API Key and URL
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "aef02d1c-39ff-4708-a8cd-79f9dfe890b8";
const COINMARKETCAP_API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

// CoinGecko API URL for cryptocurrency articles
const COINGECKO_API_URL = "https://api.coingecko.com/api/v3/news";

// RSS feed URL for cryptocurrency news (example URL)
const NEWS_RSS_FEED_URL = "https://cryptonews.com/rss/";

app.use(cors());

// Route to fetch CoinMarketCap data
app.get("/api/cryptocurrency/listings/latest", async (req, res) => {
    try {
        const response = await axios.get(COINMARKETCAP_API_URL, {
            headers: {
                'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
            },
        });

        const coinsWithImages = response.data.data.map(coin => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            quote: coin.quote,
            circulating_supply: coin.circulating_supply,
            last_updated: coin.last_updated,
            image: coin.logo || `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png` // Modify based on actual field or URL
        }));

        res.json({ data: coinsWithImages });
    } catch (error) {
        console.error("Error fetching cryptocurrency data:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Route to fetch cryptocurrency news from RSS feed
app.get("/api/cryptocurrency/news/rss", async (req, res) => {
    try {
        const feed = await parser.parseURL(NEWS_RSS_FEED_URL);
        res.json(feed.items);
    } catch (error) {
        console.error("Error fetching cryptocurrency news from RSS feed:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Route to fetch latest cryptocurrency articles from CoinGecko API
app.get("/api/cryptocurrency/news", async (req, res) => {
    try {
        const response = await axios.get(COINGECKO_API_URL);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching cryptocurrency news from CoinGecko:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
