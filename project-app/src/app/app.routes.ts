import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DefaultComponent } from './shared/components/layout/default/default.component';
import { MasterComponent } from './shared/components/layout/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
    {
        path: '', 
        component: DefaultComponent,
        children:  [{path: '', component: LoginComponent}]
    },
    {
        path: '',
        component: MasterComponent,
        children: [{path: 'todo', component: TodoComponent}]
    }
];
