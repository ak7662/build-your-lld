import useFetchye from "./hooks/useFetchye";

const App = () => {

  const { data, isLoading, error } = useFetchye()
  console.log({ data, isLoading, error });

  if (isLoading) {
    return "...loading"
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>userId</th>
            <th>completed</th>
            <th>title</th>
          </tr>
        </thead>

        <tbody>
          {data.map(val => (

            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.userId}</td>
              <td>{val.completed}</td>
              <td>{val.title}</td>
            </tr>

          ))}
        </tbody>

      </table>
    </div>
  )
}

export default App;