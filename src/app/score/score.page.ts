import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'score',
    templateUrl: 'score.page.html',
    styleUrls: ['score.page.scss']
})
export class ScorePage {
    score: Number;
    level: String;
    color: String;

    constructor(private route: ActivatedRoute, ) {
        this.score = +this.route.snapshot.paramMap.get('score');
        if (this.score <= 2) {
            this.level = 'low';
            this.color = 'chartreuse';
        } else if (this.score >= 5) {
            this.level = 'high';
            this.color = 'gold';
        } else {
            this.level = 'intermediate';
            this.color = 'tomato';
        }
    }
}
