import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
// --------------------------------------------------------------------------
// App
import { AppComponent } from './app.comonent';
import { FormComponent } from './components/form/form.comonent'
@NgModule({
    declarations: [
        AppComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule',
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
