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
    p3 = false;
    p4 = false;
    p5 = false;
    p6 = false;

    constructor(private router: Router) {

    }

    score(p1: Boolean, p2: Boolean, p3: Boolean, p4: Boolean, p5: Boolean, p6: Boolean) {
        let s = 0;
        if (p1) {
            s += 2;
        }
        if (p2) {
            s += 2;
        }
        if (!p3) {
            s += 2;
        }
        if (p4) {
            s += 1;
        }
        if (!p5) {
            s += 1;
        }
        if (!p6) {
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
