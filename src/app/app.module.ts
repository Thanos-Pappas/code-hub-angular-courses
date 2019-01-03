import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Exercise1Module} from './exercise-1/exercise1.module';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponent} from './exercise-2/parent/parent.component';
import {WrapperComponent} from './exercise-1/wrapper/wrapper.component';
import {Exercise2Module} from './exercise-2/exercise2.module';
import {ParentComponent as ThirdExParentComponent} from './exercise-3/parent/parent.component';
import {Exercise3Module} from './exercise-3/exercise3.module';
import { ExercisesComponent } from './exercises/exercises.component';
//import {WrapperComponent as ExtrasWrapperComponent} from './extra-1/wrapper/wrapper.component';
//import {Extra1Module} from './extra-1/extra-1.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'exercises', pathMatch: 'full' },
    {path: 'exercises', component: ExercisesComponent},
    {path: 'first-exercise', component: WrapperComponent},
    {path: 'second-exercise', component: ParentComponent},
    {path: 'third-exercise', component: ThirdExParentComponent}//,
    //{path: 'extra-1', component: ExtrasWrapperComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        ExercisesComponent
    ],
    imports: [
        BrowserModule,
        Exercise1Module,
        Exercise2Module,
        Exercise3Module,
       // Extra1Module,
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
