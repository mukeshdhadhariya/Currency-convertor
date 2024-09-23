import { useEffect, useState } from "react";

function UseCurrencyInfo({from,to}) {
  const [data, setData] = useState({});

  useEffect(() => {
    
    async function fetchData() {
     
        let response = await fetch(
          `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_7HWnko8yYsQxdaIyzdKS1uCuvjLgprjmKYLUjC3S&currencies=${to}&base_currency=${from}`
        );

        let result = await response.json(); 
        setData(result); 

    }

    fetchData();

  }, [from,to]); 

  return data; 
}

export default UseCurrencyInfo;
