
import "./ParkImage.css"

type background = {
  background: string
}

const ParkImage = ({ background }: background) => {
  return (
    <div
      className="ParkImage"
      style={{ backgroundImage: `url(${background})` }}
    >
    </div>
  )
}

export default ParkImage
