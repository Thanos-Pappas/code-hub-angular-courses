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
import { ExercisesComponent } from './exercises/exercises.component';
import {WrapperComponent as ExtrasWrapperComponent} from './extra-1/wrapper/wrapper.component';
import {Extra1Module} from './extra-1/extra-1.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'exercises', pathMatch: 'full' },
    {path: 'exercises', component: ExercisesComponent},
    {path: 'first-exercise', component: WrapperComponent},
    {path: 'second-exercise', component: ParentComponent},
    {path: 'third-exercise', component: ThirdExParentComponent},
    {path: 'extra-1', component: ExtrasWrapperComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        ExercisesComponent
    ],
    imports: [
        BrowserModule,
        FirstExModule,
        SecondExModule,
        ThirdExModule,
        Extra1Module,
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
