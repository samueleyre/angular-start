import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TagAdminService} from '../../../core/services/tag.admin.service';
import {TagInterface} from '../../../core/interfaces/tag';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent {

  dataSource: MatTableDataSource<TagInterface[]>;
  displayedColumns: string[] = ['name', 'iteration', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private tagAdminService: TagAdminService
  ) {
    tagAdminService.get().subscribe(tags => {
      this.dataSource = new MatTableDataSource(tags);
      this.dataSource.paginator = this.paginator;
    });
  }

  tagForm = this.fb.group(
    {
      name: [null, [Validators.required]]
    }
  )

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createTag() {
    this.tagAdminService.add(this.tagForm.getRawValue()).subscribe();
  }

  deleteTag(id: number) {
    this.tagAdminService.delete(id).subscribe();
  }

}
