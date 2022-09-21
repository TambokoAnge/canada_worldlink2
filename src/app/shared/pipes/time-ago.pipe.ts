import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  timeDiffs={
    minute: 60*1000,
    hour: 60*60*1000,
    day: 24*60*60*1000,
    week: 7*24*60*60*1000,
    month: 30*24*60*60*1000,
    year:365*24*60*60*1000
  };

  transform(value: string | Date): any {
    const now = Date.now();
    const then = new Date(value).getTime();
    let diff = now - then;
    let quo;
    if(diff< this.timeDiffs.minute){
      return 'Il y a quelques secondes';
    }else if(diff< this.timeDiffs.hour){
      return 'Il y a quelques minutes';
    }else if(diff<this.timeDiffs.day){
      quo= ~~(diff/this.timeDiffs.hour);
      return `Il y a ${quo} heures`
    }else if(diff< this.timeDiffs.week){
      quo= ~~(diff/this.timeDiffs.day);
      return `Il y a ${quo} jours`
    }else if(diff< this.timeDiffs.month){
      quo= ~~(diff/this.timeDiffs.day);
      return `Il y a ${quo} semaines`
    }else if(diff< this.timeDiffs.year){
      quo= ~~(diff/this.timeDiffs.month);
      return `Il y a ${quo}mois`
    }else{
      quo= ~~(diff/this.timeDiffs.year);
      if(quo> 1){
        return `Il y a ${quo} ans`
      }
      return `Il y a ${quo} an`
    }
  }
}
