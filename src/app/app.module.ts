import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

import {TreeModule} from 'primeng/tree';
import {DialogModule} from 'primeng/dialog';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TreeEditComponent } from './tree-view/tree-edit/tree-edit.component';
import {InplaceModule} from 'primeng/inplace';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    HeaderComponent,
    TreeEditComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    InplaceModule,
    ContextMenuModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
