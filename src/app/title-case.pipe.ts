import { Pipe, PipeTransform } from '@angular/core';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  private isPreposition(word: string) : boolean{
    let prepositions = [
      "a",
      "abaft",
      "aboard",
      "about",
      "above",
      "absent",
      "across",
      "afore",
      "after",
      "against",
      "along",
      "alongside",
      "amid",
      "amidst",
      "among",
      "amongst",
      "an",
      "anenst",
      "apropos",
      "apud",
      "around",
      "as",
      "aside",
      "astride",
      "at",
      "athwart",
      "atop",
      "barring",
      "before",
      "behind",
      "below",
      "beneath",
      "beside",
      "besides",
      "between",
      "beyond",
      "but",
      "by",
      "circa",
      "concerning",
      "despite",
      "down",
      "during",
      "except",
      "excluding",
      "failing",
      "following",
      "for",
      "forenenst",
      "from",
      "given",
      "in",
      "including",
      "inside",
      "into",
      "lest",
      "like",
      "mid",
      "midst",
      "minus",
      "modulo",
      "near",
      "next",
      "notwithstanding",
      "of",
      "off",
      "on",
      "onto",
      "opposite",
      "out",
      "outside",
      "over",
      "pace",
      "past",
      "per",
      "plus",
      "pro",
      "qua",
      "regarding",
      "round",
      "sans",
      "save",
      "since",
      "than",
      "the",
      "through",
      "throughout",
      "till",
      "times",
      "to",
      "toward",
      "towards",
      "under",
      "underneath",
      "unlike",
      "until",
      "unto",
      "up",
      "upon",
      "versus",
      "via",
      "vice",
      "with",
      "within",
      "without",
      "worth"
    ]
    return prepositions.includes(word);

  }

  private toTitleCase(word: string){
    return word.substr(0,1).toUpperCase() + word.substring(1,word.length).toLowerCase();
  }

  transform(value: string): string {
    let words: string[] = value.split(" ");
    for(let i=0; i<words.length; i++){

       if (this.isPreposition(words[i]) && i!=0)
        words[i] = words[i].toLowerCase();
       else
        words[i] = this.toTitleCase(words[i]);
       
    }

    return words.join(" ");
  }

}
