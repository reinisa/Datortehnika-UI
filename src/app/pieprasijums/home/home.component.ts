import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Pieprasijums } from '../pieprasijums';
import { PieprasijumsService } from '../pieprasijums.service';
import { MatDialog } from '@angular/material/dialog'
import { PieprasijumsFormComponent } from '../pieprasijums-form/pieprasijums-form.component';
import { Params } from '../../paramEnums/params';
import { Status } from '../../paramEnums/status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  displayedColumns = ['id', 'tehnika', 'datums', 'pamatojums', 'parametri', 'status', 'apstiprinat','noraidit', 'dzest'];
  dataSource = new MatTableDataSource<Pieprasijums>();

  constructor(private pieprasijumsService:PieprasijumsService){}

  p: Pieprasijums= {
    id: undefined,
    tehnika: { id:0, nosaukums: '', apraksts:''}, 
    datums: new Date(),
    pamatojums: '',
    parametri: {} as Params,
    status: Status.IESNIEGTS
    };

  pieprasijums:Pieprasijums[]=[];
  readonly dialog=inject(MatDialog);

  ngAfterViewInit(): void {
      this.pieprasijumsService.fetchAllPieprasijums().subscribe((data)=>{
        this.pieprasijums=data;
        this.dataSource = new MatTableDataSource<Pieprasijums>(data);
      })
  }

  openDialog(p:Pieprasijums):void{ 
    const dialogRef=this.dialog.open(PieprasijumsFormComponent,{
      data: p 
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!==undefined){
        this.p.id=result.id;
        this.p.tehnika=result.tehnika;
        this.p.datums=result.datums;
        this.p.pamatojums=result.pamatojums;
        this.p.parametri=result.parametri;
        this.p.status=result.status;
      }
    })
  }

  changeStatus(p: Pieprasijums, status: boolean): void {
    if (!p.id) {
      console.error("Pieprasijums ID is missing.");
      return;
    }
  
    this.pieprasijumsService.updatePieprasijums(p.id, status).subscribe((updated: Pieprasijums) => {
      p.status = updated.status;
    });
  }

  deletePieprasijums(id: number) {
    const isConfirmed=window.confirm("Vai tiešām vēlies izdzēst?");
    if(isConfirmed){
      this.pieprasijumsService.deletePieprasijums(id).subscribe((data)=>{
      this.pieprasijums=this.pieprasijums.filter(item=>item.id!=id);
    })
      window.location.reload();
    }
  }
  
}
