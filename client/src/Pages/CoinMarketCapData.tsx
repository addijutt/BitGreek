import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface Coin {
  image: string | undefined;
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      market_cap: number;
      volume_24h: number;
    };
  };
  circulating_supply: number;
  last_updated: string;
}

const REFRESH_INTERVAL = 15000; // Refresh every 15 seconds

const CoinMarketCapData: React.FC = () => {
  const [data, setData] = useState<Coin[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://aware-cyclic-bunny.glitch.me/api/cryptocurrency/listings/latest', {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache', // Disable cache
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, REFRESH_INTERVAL);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const getColor = (percentChange: number) => {
    return percentChange >= 0 ? '#16c784' : '#ea3943';
  };

  const renderChart = (coin: Coin) => {
    const chartData = [
      { name: 'Day 1', price: coin.quote.USD.price * (1 - coin.quote.USD.percent_change_7d / 700) },
      { name: 'Day 2', price: coin.quote.USD.price * (1 - coin.quote.USD.percent_change_7d / 600) },
      { name: 'Day 3', price: coin.quote.USD.price * (1 - coin.quote.USD.percent_change_7d / 500) },
      { name: 'Day 4', price: coin.quote.USD.price * (1 - coin.quote.USD.percent_change_7d / 400) },
      { name: 'Day 5', price: coin.quote.USD.price * (1 - coin.quote.USD.percent_change_7d / 300) },
      { name: 'Day 6', price: coin.quote.USD.price * (1 - coin.quote.USD.percent_change_7d / 200) },
      { name: 'Day 7', price: coin.quote.USD.price },
    ];

    const lineColor = getColor(coin.quote.USD.percent_change_7d);

    return (
      <ResponsiveContainer width="100%" height={40}>
        <LineChart data={chartData} style={{ backgroundColor: 'transparent' }}>
          <Line type="monotone" dataKey="price" stroke={lineColor} dot={false} />
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    );
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

  const formatPrice = (price: number) => {
    return price < 1 ? price.toFixed(8) : price.toFixed(2);
  };

  return (
    <div className="container text-dark data-table">
      <div className="card bg-white border-0 rounded p-4 pt-0">
        <table className="table table-light table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">1h %</th>
              <th scope="col">24h %</th>
              <th scope="col">7d %</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Volume (24h)</th>
              <th scope="col">Circulating Supply</th>
              <th scope="col">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((coin, index) => (
              <tr key={coin.id}>
                <td scope="row">{index + 1}</td>
                <td>
                  {coin.name} ({coin.symbol})
                </td>
                <td>${formatPrice(coin.quote.USD.price)}</td>
                <td style={{ color: getColor(coin.quote.USD.percent_change_1h) }}>
                  {coin.quote.USD.percent_change_1h.toFixed(2)}%
                </td>
                <td style={{ color: getColor(coin.quote.USD.percent_change_24h) }}>
                  {coin.quote.USD.percent_change_24h.toFixed(2)}%
                </td>
                <td style={{ color: getColor(coin.quote.USD.percent_change_7d) }}>
                  {coin.quote.USD.percent_change_7d.toFixed(2)}%
                </td>
                <td>${coin.quote.USD.market_cap.toLocaleString()}</td>
                <td>${coin.quote.USD.volume_24h.toLocaleString()}</td>
                <td>{coin.circulating_supply.toLocaleString()} {coin.symbol}</td>
                <td>{renderChart(coin)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinMarketCapData;
