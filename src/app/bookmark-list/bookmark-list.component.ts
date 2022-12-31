import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BOOKMARKLIST } from '../models/initializers/bookmark-list-options';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent {

  public bookmarkLists = BOOKMARKLIST;

  bookmarkListForm!: FormGroup;

  constructor(public fb: FormBuilder){}

  ngOnInit(): void {
    this.bookmarkListForm = this.fb.group({
      bookmarkTitle: ['']
    })
  }

}
