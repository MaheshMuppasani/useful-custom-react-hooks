import useArray from "./useArray"
import { useState } from "react/cjs/react.development"

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  const [addNew, setAddNew] = useState("");

  return (
    <div>
      <div>{array.join(", ")}</div>
      <div>
        <label>Add an element</label>
        <input type="text" value={addNew} onChange={e=>setAddNew(parseFloat(e.target.value))}/>
        <button onClick={()=>{push(addNew)}}>Add</button>
      </div>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
