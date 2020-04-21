import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {ReactiveFormsModule} from '@angular/forms';
import {TodoState} from './todo.state';
import {HttpClientModule} from '@angular/common/http';

const routing :Routes = [
 
  {path:'list',component:ListComponent},
  {path:'form',component:FormComponent}

]

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([
          TodoState
      ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        HttpClientModule,
        NgxsLoggerPluginModule.forRoot(),
        RouterModule.forRoot(routing),
        ReactiveFormsModule,

        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}