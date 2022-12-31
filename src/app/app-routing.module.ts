import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'addbookmark', component: AddBookmarkComponent },
  { path: 'bookmarklist', component: BookmarkListComponent },
  { path: 'bookmarkdetails', component: BookmarkDetailsComponent },
  { path: '', redirectTo: '/addbookmark', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
