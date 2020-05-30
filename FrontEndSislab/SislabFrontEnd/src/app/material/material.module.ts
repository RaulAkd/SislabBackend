import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import {MatInputModule, MatIconModule, MatDialogModule, MatSnackBar, MatSnackBarModule} from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSelectModule,
        MatExpansionModule,
        MatGridListModule,
        MatStepperModule,
        MatListModule
     ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSelectModule,
        MatExpansionModule,
        MatGridListModule,
        MatStepperModule,
        MatListModule
    ],
    providers: [],
})
export class MaterialModule { }
