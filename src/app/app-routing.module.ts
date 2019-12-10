import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ReferencesComponent } from "./references/references.component";
import { TutorialsComponent } from "./tutorials/tutorials.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "references", component: ReferencesComponent },
  { path: "tutorials", component: TutorialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
