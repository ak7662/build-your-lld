import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Countries List 🌍</h1>

      {data.countries.map((country) => (
        <div key={country.code}>
          {country.emoji} {country.name}
        </div>
      ))}
    </div>
  );
}

export default App;
