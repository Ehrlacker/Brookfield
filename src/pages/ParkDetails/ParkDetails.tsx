
import SearchContainer from 'components/common/SearchContainer/SearchContainer'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Datum} from 'types/types'

const ParkDetails = () => {
    const [park, setPark] = useState<Datum[]>([])
	const {id} = useParams()

useEffect( ()=>{
    const getPark = async ()=>{
        const url=`https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&id=${id}`
        const response = await fetch(url)
        const resJSON = await response.json()
        console.log(resJSON.data)
        setPark(resJSON.data)
    } 
    getPark()
}, [id])

  return (
    <div className="ParkDetails">
        {park.map((newPark)=>{
            return(
                <SearchContainer key={newPark.id} background={newPark.images[0].url} />
            )
        })}
       
    </div>
  )
}

export default ParkDetails