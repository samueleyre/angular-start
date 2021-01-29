import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../core/services/profile.service';
import {AuthService} from '../../../core/services/auth.service';
import {Observable} from 'rxjs';
import {TagService} from '../../../core/services/tag.service';
import {TagInterface} from '../../../core/interfaces/tag';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tags$: Observable<TagInterface[]>;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private tagService: TagService,
    private snackBar: MatSnackBar
  ) {
    this.tags$ = this.tagService.get();
  }

  userForm = this.fb.group({
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    tags: [[]]
  });

  ngOnInit() {
    const user = AuthService.user;
    this.firstNameControl.setValue(user.first_name);
    this.lastNameControl.setValue(user.last_name);
    this.tagsControl.setValue(user.tags);
  }

  get firstNameControl() {
    return this.userForm.get('first_name');
  }

  get lastNameControl() {
    return this.userForm.get('last_name');
  }

  get tagsControl() {
    return this.userForm.get('tags');
  }

  updateProfile(): void {
    // getRawValues permet de récupérer toutes les valeurs du formulaire sous la forme d'un objet
    const userChanges = this.userForm.getRawValue();
    this.profileService.update(userChanges).subscribe(
      () => {
        this.snackBar.open(`Profil mis à jour !`, null, {
          duration: 2000,
        });
      }
    );
  }

  compareIds(tagOption: TagInterface, tagSelection: TagInterface): boolean {
    return tagOption && tagSelection ? tagOption.id === tagSelection.id : tagOption === tagSelection;
  }

}
