

import './Activity.css'

type activity = {
name: string;
url: string

}

const Activity = ({name, url}:activity) => {
  return (
    <div className="Activity">
        <img className="ActivityImage" src={url} alt="an outdoor activity" />
        <h1 className="ActivityName">{name}</h1>
    </div>
  )
}

export default Activity