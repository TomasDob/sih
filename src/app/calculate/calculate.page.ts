import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'calculate',
    templateUrl: 'calculate.page.html',
    styleUrls: ['calculate.page.scss']
})
export class CalculatePage {
    p1 = false;
    p2 = false;
    p3 = 10;
    p4 = false;
    p5 = 10;
    p6 = 10;

    constructor(private router: Router) {

    }

    score(p1: Boolean, p2: Boolean, p3: Number, p4: Boolean, p5: Number, p6: Number) {
        let s = 0;
        if (p1) {
            s += 2;
        }
        if (p2) {
            s += 2;
        }
        if (p3 <= 4) {
            s += 2;
        }
        if (p4) {
            s += 1;
        }
        if (p5 <= 5) {
            s += 1;
        }
        if (p6 <= 6.5) {
            s += 1;
        }
        return s;
    }

    onCalculateClick() {
        const score = this.score(this.p1, this.p2, this.p3, this.p4, this.p5, this.p6);
        console.log(score);
        this.router.navigate(['tabs/calculate/score', { score }]);
    }
}
