import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstExModule} from './first-ex/first-ex.module';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponent} from './second-ex/parent/parent.component';
import {WrapperComponent} from './first-ex/wrapper/wrapper.component';
import {SecondExModule} from './second-ex/second-ex.module';
import {ParentComponent as ThirdExParentComponent} from './third-ex/parent/parent.component';
import {ThirdExModule} from './third-ex/third-ex.module';

const appRoutes: Routes = [
    {path: 'first-exercise', component: WrapperComponent},
    {path: 'second-exercise', component: ParentComponent},
    {path: 'third-exercise', component: ThirdExParentComponent}
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FirstExModule,
        SecondExModule,
        ThirdExModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- for debugging purposes only set to true
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
