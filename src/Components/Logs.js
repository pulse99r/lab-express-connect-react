import { useState, useEffect } from "react";
import Log from "./Log"
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
console.log(API)
function Logs() {
  const [logs, setLogs] = useState([]);
  console.log(API)
 useEffect(() => {
  axios
    .get(`${API}/logs`)
    .then((response) => setLogs(response.data))
    .catch((c) => console.warn("catch", c));
}, []);


  return (
    <div className="logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
