import { animate, animateChild, group, query, sequence, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment.model';
import { flashAnimation } from '../../animations/flash.animation';
import { slideAndFadeAnimation } from '../../animations/slide-and-fade.animation';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [// le trigger permet de faire des animations
    trigger('list', [
      transition(':enter', [//le selecteur :enter est la même chose que void=>*
        query('@listItem',[//On a utilisé le selecteur des enfants pour les appeler avec query
          stagger(50, [// la fonction stagger permet de ralentir le temps des éléments en ms
            animateChild()// ça déclenche l'animation que les enfants ont sur eux
          ])
        ])
      ])
    ]),
    trigger('listItem', [
      state('default', style({//le state représente l'état de l'élément
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [// la transition d'un état vers un autre
        animate('100ms ease-in-out')// l'animation correspondante avec ou sans style
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      transition('void => *',[
        query('.comment-text, .comment-date', [
          style({
            opacity: 0
          })
        ]),
        useAnimation(slideAndFadeAnimation,{
          params:{
            time:'500ms',
            startColor: 'rgb(201, 157, 242)',
          }
        }),
        group([
          useAnimation(flashAnimation, {
            params:{
              time: '1000ms',
              flashColor: 'rgb(249, 179, 111)'
            }
          }),
          query('.comment-text', [
            animate('250ms', style({
              opacity:1
            }))
          ]),
          query('.comment-date', [
            animate('500ms', style({
              opacity:1
            }))
          ])
        ]),
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {

  @Input() comments!: Comment[];
  @Output() newComment= new EventEmitter<string>();//un objet qui va émettre des évenements

  commentCtrl!:FormControl;
  animationStates: {[key: number]: 'default' | 'active'} = {}
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentCtrl= this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    //formBuilder.control permet de mettre des controls notre input qui est dans le template
    for(let index in this.comments){
      this.animationStates[index]= 'default'
    }
  }

  onLeaveComment(){
    if(this.commentCtrl.invalid){
      return;
    }
    const maxId = Math.max(...this.comments.map(comment => comment.id));
    this.comments.unshift({
      id: maxId+1,
      comment: this.commentCtrl.value,
      createdDate: new Date().toISOString(),
      userId:1
    });
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

  onListItemMouseEnter(index: number){
    this.animationStates[index]= 'active'
  }

  onListItemMouseLeave(index: number){
    this.animationStates[index]= 'default'
  }

}
