import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'score',
    templateUrl: 'score.page.html',
    styleUrls: ['score.page.scss']
})
export class ScorePage {
    score: String;

    constructor(private route: ActivatedRoute, ) {
        this.score = this.route.snapshot.paramMap.get('score');
    }
}
