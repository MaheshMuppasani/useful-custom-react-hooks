import { useState } from "react"
import useDebounce from "./useDebounce"

export default function DebounceComponent() {
  const [count, setCount] = useState(10)
  const [searchInput, setSearchInput] = useState("");
  useDebounce(() => alert(count), 1000, [count])
  useDebounce(() => alert(searchInput), 1000, [searchInput])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
    </div>
  )
}
