import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ReceitasComponent } from './componentes/receitas/receitas.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { HistoriaComponent } from './componentes/historia/historia.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'historia', component: HistoriaComponent },


  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
