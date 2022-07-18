// import Lion from "./svg/lion.svg"
import { Lion } from "components/lion"

export function App() {
  return (
    <div className="container">
      <div>
        <h1>I’m strong like a lion</h1>
        {/* <img src={Lion} alt="lion" className="lion" /> */}
        <div className="lion">
          <Lion />
        </div>
      </div>
    </div>
  )
}
