import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {path: '', component: HomeComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}