


import './SectionTitles.css'

type title={
    name:string;
}

const SectionTitles = ({name}:title) => {
  return (
    <div className="SectionTitles">{name}</div>
  )
}

export default SectionTitles