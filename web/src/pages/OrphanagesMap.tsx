import React from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import {Map,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
    return (
        <div id = "page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
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
                center={[-7.2276631,-39.3143093]}
                zoom={13}
                style={{width: '100%', height:'100%'}}>
                <TileLayer url ="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* <TileLayer 
                url ={`https://api.mapbox.com/syles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                /> */}
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    )
    
}

export default OrphanagesMap