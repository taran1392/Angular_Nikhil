import { LoginComponent } from './login/login.component'
import { TestComponent } from './test/test.component';
import { TodoComponent } from './todo/todo.component';
import { TestFormComponent } from './test-form/test-form.component'
import { Route } from '@angular/router';

export const ROUTES :Array<Route>=[
{path:"login",component:LoginComponent   },
{path:"todo",component:TodoComponent },
{ path:"test",component: TestComponent ,children:[ {  path:"edit/:id",component:TestFormComponent }  ]  }


]