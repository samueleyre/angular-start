import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TagAdminService} from '../../../core/services/tag.admin.service';
import {TagInterface} from '../../../core/interfaces/tag';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent {

  dataSource: MatTableDataSource<TagInterface[]>;
  displayedColumns: string[] = ['name', 'iteration'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private tagAdminService: TagAdminService
  ) {
    tagAdminService.get().subscribe(tags => {
      this.dataSource = new MatTableDataSource(tags);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
