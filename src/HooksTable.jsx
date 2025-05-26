
import "./Navbar3.css";

function HooksTable() {
  const hooks = [
    { name: 'useState', purpose: 'Adds state to a functional component.' },
    { name: 'useEffect', purpose: 'Runs side effects (like fetching data, timers, etc.) after rendering.' },
    { name: 'useContext', purpose: 'Allows you to use the React context (global data).' },
    { name: 'useRef', purpose: 'Creates a reference to a DOM element or a value that persists across renders.' },
    { name: 'useMemo', purpose: 'Optimizes performance by memoizing expensive calculations.' },
    { name: 'useCallback', purpose: 'Memoizes functions to avoid unnecessary re-renders.' },
  ];

  return (
    <div className="table-container">
      <h2>Commonly Used React Hooks</h2>
      <table className="hooks-table">
        <thead>
          <tr>
            <th>Hook</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {hooks.map((hook, index) => (
            <tr key={index}>
              <td><code>{hook.name}</code></td>
              <td>{hook.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HooksTable;
