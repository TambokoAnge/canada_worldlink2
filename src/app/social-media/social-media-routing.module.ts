import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  {path: '', component: PostListComponent, resolve:{posts: PostsResolver}}//l'objet resolve lie les donneés récupérées par le resolver à la clé posts qui sera utilisé par le component PostList
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
