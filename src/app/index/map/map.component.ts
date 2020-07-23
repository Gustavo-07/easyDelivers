import { Component, OnInit, Inject } from '@angular/core';
import { MapService } from 'src/services/map.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pedidos } from 'src/models/pedidos/pedidos';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private mapService: MapService,
    public dialogRef: MatDialogRef<MapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pedidos
  ) { }

  ngOnInit() {
    this.mapService.buildMap();
    this.mapService.addMarkers(this.data);
  }

}
