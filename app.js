function App() {
  const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
  if (!res.response) {
    return <div>Loading...</div>
  }
  const dogName = res.response.status
  const imageUrl = res.response.message
  return (
    <div className="App">
      <div>
        <h3>{dogName}</h3>
        <div>
          <img src={imageUrl} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
