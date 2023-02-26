import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log(`Do a search with`, term);
    // searchImages()
    
  }


  return <div>
    <SearchBar onSubmit={handleSubmit} />
  </div>
}

export default App;