import { useEffect, useRef } from 'react'
import L from 'leaflet'
import type { Poi } from '../data/routes'
import { MAP_CENTER, MAP_ZOOM, START_POINT, END_POINT } from '../data/routes'

interface Props {
  pois: Poi[]
  selectedPoiId: string | null
  onPoiClick: (poi: Poi) => void
}

function makeMarkerIcon(label: string, selected: boolean) {
  return L.divIcon({
    className: '',
    html: `<div class="map-marker${selected ? ' selected' : ''}">${label}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })
}

function makeEndpointIcon(type: 'start' | 'end') {
  const inner = type === 'start'
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10"/></svg>`
    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
  return L.divIcon({
    className: '',
    html: `<div class="map-marker-${type}">${inner}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  })
}

export function RouteMap({ pois, selectedPoiId, onPoiClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<Map<string, L.Marker>>(new Map())

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
      zoomControl: false,
      attributionControl: false,
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© CartoDB © OSM',
    }).addTo(map)

    L.marker([START_POINT.lat, START_POINT.lng], {
      icon: makeEndpointIcon('start'),
    }).addTo(map).bindTooltip(START_POINT.name, { permanent: false })

    L.marker([END_POINT.lat, END_POINT.lng], {
      icon: makeEndpointIcon('end'),
    }).addTo(map).bindTooltip(END_POINT.name, { permanent: false })

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map || pois.length === 0) return

    markersRef.current.forEach(m => m.remove())
    markersRef.current.clear()

    const latlngs: L.LatLngTuple[] = [
      [START_POINT.lat, START_POINT.lng],
      ...pois.map(p => [p.lat, p.lng] as L.LatLngTuple),
      [END_POINT.lat, END_POINT.lng],
    ]

    L.polyline(latlngs, {
      color: '#FF5F1F',
      weight: 3,
      opacity: 0.6,
      dashArray: '6 8',
    }).addTo(map)

    pois.forEach(poi => {
      const marker = L.marker([poi.lat, poi.lng], {
        icon: makeMarkerIcon(String(poi.order), poi.id === selectedPoiId),
      }).addTo(map)
      marker.on('click', () => onPoiClick(poi))
      markersRef.current.set(poi.id, marker)
    })

    map.fitBounds(L.latLngBounds(latlngs), { padding: [48, 48], maxZoom: 14, animate: true })
  }, [pois, onPoiClick])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    markersRef.current.forEach((marker, id) => {
      const poi = pois.find(p => p.id === id)
      if (poi) {
        marker.setIcon(makeMarkerIcon(String(poi.order), id === selectedPoiId))
      }
    })
    if (selectedPoiId) {
      const poi = pois.find(p => p.id === selectedPoiId)
      if (poi) map.panTo([poi.lat, poi.lng], { animate: true })
    }
  }, [selectedPoiId, pois])

  return <div ref={containerRef} className="map-bg" />
}
