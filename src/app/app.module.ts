/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';

/* WeUI Module */
import { WeUIModule } from './weui'; // 'angular-weui'

/* WeUI Example Module */
// import { WeUIExampleModule } from '../pages/weui/weui.example.module';
// import { WeUIExample } from '../pages/weui/weui.example';

import { WebModule } from './web/Web.module';
import {WebComponent} from './web/web.component';


@NgModule({
    imports: [
        HttpModule,
        CoreModule,
        BrowserAnimationsModule,
        WeUIModule,
        RouterModule.forRoot([]),
        WebModule
    ],
    declarations: [
        // AppComponent
    ],
    entryComponents: [
        // AppComponent
    ],
    providers: [

    ],
    bootstrap: [
        WebComponent
    ]
})
export class AppModule { }
