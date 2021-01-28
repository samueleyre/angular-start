import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfileService} from '../../../core/services/profile.service';
import {TagService} from '../../../core/services/tag.service';
import {Observable} from 'rxjs';
import {TagInterface} from '../../../core/interfaces/tag';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tags: Observable<TagInterface[]>;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private tagService: TagService
  ) {
    this.tags = this.tagService.get();
  }

  userForm = this.fb.group(
    {
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      tags: [null]
    }
  );

  ngOnInit() {
    const profile = this.profileService.get();
    this.firstNameControl.setValue(profile.first_name);
    this.lastNameControl.setValue(profile.last_name);
    this.tagsControl.setValue(profile.tags);
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
    this.profileService.update(userChanges).subscribe();
  }

  // cette fonction a aider "mat-select" à relier l'objet sélectionné parmi celles de référence : les options.
  compareFn(tag1: TagInterface, tag2: TagInterface) {
    return tag1 && tag2 ? tag1.id === tag2.id : tag1 === tag2;
  }
}
