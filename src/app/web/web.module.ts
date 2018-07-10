/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule ,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../core/core.module';

/* WeUI Module */
import { WeUIModule } from '../weui'; // 'angular-weui'
import { WebComponent } from './web.component'; 

/* Web Module Component */
import {HomeComponent} from './component/home/home.component';
import {DetailComponent} from './component/home/detail/detail.component';
import {ListComponent} from './component/list/list.component';


const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent,
      children:[
        { path: 'detail',  component: DetailComponent}
      ]
    },
    {
        path: 'list',
        component: ListComponent
    }
];

@NgModule({
    imports: [
        HttpModule,
        CoreModule,
        BrowserAnimationsModule,
        WeUIModule,
        RouterModule.forChild(routes)


    ],
    declarations: [
        WebComponent,
        HomeComponent,
        DetailComponent,
        ListComponent
    ],
    entryComponents: [
        // AppComponent
    ],
    providers: [

    ],


})
export class WebModule { }

