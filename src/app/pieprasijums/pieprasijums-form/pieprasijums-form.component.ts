import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Pieprasijums } from '../pieprasijums';
import { PieprasijumsService } from '../pieprasijums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Params } from '../../paramEnums/params';
import { Tehnika } from '../../tehnika/tehnika';
import { TehnikaService } from '../../tehnika/tehnika.service';

@Component({
  selector: 'app-pieprasijums-form',
  imports: [MatDialogModule,MatDialogTitle,MatDialogContent,MatDialogActions,MatFormFieldModule,MatInputModule,
  MatIconModule,MatButtonModule, CommonModule, FormsModule, MatSelectModule, MatOptionModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './pieprasijums-form.component.html',
  styleUrl: './pieprasijums-form.component.css'
})
export class PieprasijumsFormComponent implements OnInit {

  paramsList: string[] = [];
  tehnikaList: Tehnika[] = [];
  private tehnikaService = inject(TehnikaService);

  ngOnInit(): void {
      this.paramsList = Object.values(Params);
      this.fetchTehnikaList();
  }

  fetchTehnikaList(): void {
    this.tehnikaService.fetchAllTehnika().subscribe({
      next: (data: Tehnika[]) => this.tehnikaList = data,
      error: (err) => console.error('Error fetching tehnika:', err)
    });
  }

  readonly dialogRef=inject(MatDialogRef<PieprasijumsFormComponent>)
  data=inject<Pieprasijums>(MAT_DIALOG_DATA);

  constructor(private pieprasijumsService:PieprasijumsService){}

  addPieprasijums(p:Pieprasijums){
      this.pieprasijumsService.createPieprasijums(p).subscribe({
        next:(data)=>{
          console.log("Pieprasijums Created Successfully")
          window.location.reload();
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

//   addPieprasijums(p:Pieprasijums){
//     this.pieprasijumsService.createPieprasijums(p).subscribe({
//       next:(data)=>{
//         console.log("Pieprasijums Created Successfully")
//         // window.location.reload();
//         this.dialogRef.close(data);
//       },
//       error:(err)=>{
//         console.log(err);
//       }
//     })
//   }
}
