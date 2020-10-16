import React,{useEffect, useState} from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface Orphanage{
  id:number,
  latitude: number,
  longitude:number,
  name:string
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(()=>{
    api.get('orphanages').then(response=> {
      setOrphanages(response.data)
    })
  },[])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2> Escolha um Orfanato no mapa </h2>
          <p>
            Muitas crianças estão esperando a sua visita :
                </p>
        </header>
        <footer>
          <strong>Juazeiro Do Norte</strong>
          <span> Ceará</span>
        </footer>
      </aside>
      <Map
        center={[-7.2276631, -39.3143093]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer 
          // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
       {orphanages.map(orphanage=>{
         return(
          <Marker
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
              <Link to={ `/orphanages/${orphanage.id}`}>
                <FiArrowRight size={32} color ="#ffff "/>
              </Link>
            </Popup>
          </Marker>
          )
        })}
        </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )

}

export default OrphanagesMap