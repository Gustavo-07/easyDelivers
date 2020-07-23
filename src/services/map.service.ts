import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Pedidos } from 'src/models/pedidos/pedidos';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 10.470761;
  lng =-73.257779;
  zoom = 12;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }
  buildMap() {
    
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
   // this.map.addControl(new mapboxgl.NavigationControl({showCompass: true, showZoom: true, visualizePitch: true}));
  }

  addMarkers(pedido: Pedidos) {
    this.geoJson(pedido).features.forEach((marker) => {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.id = 'marker';
      let sitio = new mapboxgl.Popup({ offset: 25 }).setHTML('<span matBadge="1" matBadgeOverlap="false"><strong>'+marker.properties.title+'</strong><br>'+marker.properties.description+'</span>')
      // 
      new mapboxgl.Marker(el, {
        draggable: false
      })
        .setLngLat(marker.geometry.coordinates).setPopup(sitio)
        .addTo(this.map);
    });
  }

  geoJson(pedido: Pedidos) {
    let features: any[] = [];
    if(pedido.escogido) {
      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [ pedido.escogido.ubicacion.longitude, pedido.escogido.ubicacion.latitude]
        },
        properties: {
          title: 'Escogido',
          description: 'Lugar donde el mensajero escogio este pedido'
        }});
    }
    if(pedido.recibido) {
      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [pedido.recibido.ubicacion.longitude , pedido.recibido.ubicacion.latitude ]
        },
        properties: {
          title: 'Pedido recibido en:',
          description: pedido.recepcion.direccion + ', ' + pedido.recepcion.barrio 
        }});
    }
    if(pedido.entregado) {
      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [pedido.entregado.ubicacion.longitude ,pedido.entregado.ubicacion.latitude]
        },
        properties: {
          title: 'Pedido entregado en:',
          description: pedido.entrega.direccion + ', ' + pedido.entrega.barrio 
        }});
    }
    return {
      type: 'FeatureCollection',
      features: features
    };
  }
}