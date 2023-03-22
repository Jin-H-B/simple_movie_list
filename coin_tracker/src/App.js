import { useEffect, useState } from "react";

function App() {

  const [jargons, setJargons] = useState([]);
  const [dics, setDics] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/tags");
      const result = await res.json();
      setJargons(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const newDics = jargons.map((item) => ({
      key: item.name,
      value: item.description,
    }));
    setDics(newDics);
  }, [jargons]);

  console.log("hello");
  console.log(dics);

  return (
    <div>
      <h1>STUDY CRYPTOCURRUNCY JARGON!</h1>
      <ul>
        {dics.map((item, idx) => (
          <div>
            <hr />
            <li key={idx}>
              {item.key} : <br/>
              {item.value}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
