import useToggle from "./useToggle"

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <div>
      <input type="checkbox" checked={value} onChange={toggleValue}/>
      <span>{value.toString()}</span>
      <div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(false)}>Make False</button> 
      </div>
    </div>
  )
}
