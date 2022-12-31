import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DETAILS } from '../models/initializers/bookmark-Details-Options';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css']
})
export class BookmarkDetailsComponent implements OnInit {
  public bookmarkDetails = DETAILS;

  bookmarkDetailsForm!: FormGroup;

  constructor(public fb: FormBuilder){}

  ngOnInit(): void {
    this.bookmarkDetailsForm = this.fb.group({
      bookmarkTitle: [''],
      bookmarkUrl: [''],
      bookmarkCategory: ['']
    });
  } 
}
