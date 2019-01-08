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
import {ExercisesComponent} from './exercises/exercises.component';
import {LifecycleComponent} from "./exercise-4/lifecycle/lifecycle.component";
import {Exercise4Module} from "./exercise-4/exercise-4.module";
import {Exercise8Module} from "./exercise-8/exercise-8.module";
import {DirectiveShowcaseComponent} from "./exercise-8/directive-showcase/directive-showcase.component";
import {WrapperComponent as ExtrasWrapperComponent} from './extra-1/wrapper/wrapper.component';
import {Extra1Module} from './extra-1/extra-1.module';
import {ServicesShowcaseComponent} from './exercise-5/services-showcase/services-showcase.component';
import {Exercise5Module} from './exercise-5/exercise-5.module';
import {UnorderedListComponent} from './exercise-6/unordered-list/unordered-list.component';
import {Exercise6Module} from './exercise-6/exercise-6.module';
import {OrderedListComponent} from './exercise-7/ordered-list/ordered-list.component';
import {Exercise7Module} from './exercise-7/exercise-7.module';
import {RoutingComponent} from './extras/routing/routing.component';
import {ExtrasModule} from './extras/extras.module';

const appRoutes: Routes = [
    {path: '', redirectTo: 'exercises', pathMatch: 'full'},
    {path: 'exercises', component: ExercisesComponent},
    {path: 'exercise-1', component: WrapperComponent},
    {path: 'exercise-2', component: ParentComponent},
    {path: 'exercise-3', component: ThirdExParentComponent},
    {path: 'exercise-4', component: LifecycleComponent},
    {path: 'exercise-5', component: ServicesShowcaseComponent},
    {path: 'exercise-6', component: UnorderedListComponent},
    {path: 'exercise-7', component: OrderedListComponent},
    {path: 'exercise-8', component: DirectiveShowcaseComponent},
    {path: 'extras', component: RoutingComponent},
    {path: 'extras/extra-1', component: ExtrasWrapperComponent}
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
        Exercise4Module,
        Exercise5Module,
        Exercise6Module,
        Exercise7Module,
        Exercise8Module,
        ExtrasModule,
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
