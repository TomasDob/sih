import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'intro',
                children: [
                    {
                        path: '',
                        loadChildren: '../intro/intro.module#IntroPageModule'
                    }
                ]
            },
            {
                path: 'calculate',
                children: [
                    {
                        path: 'score',
                        loadChildren: '../score/score.module#ScorePageModule'
                    },
                    {
                        path: '',
                        loadChildren: '../calculate/calculate.module#CalculatePageModule'
                    }
                ]
            },
            {
                path: 'measure',
                children: [
                    {
                        path: 'p1',
                        loadChildren: '../p1/p1.module#P1PageModule'
                    },
                    {
                        path: 'p2',
                        loadChildren: '../p2/p2.module#P2PageModule'
                    },
                    {
                        path: 'p3',
                        loadChildren: '../p3/p3.module#P3PageModule'
                    },
                    {
                        path: 'p4',
                        loadChildren: '../p4/p4.module#P4PageModule'
                    },
                    {
                        path: 'p5',
                        loadChildren: '../p5/p5.module#P5PageModule'
                    },
                    {
                        path: 'p6',
                        loadChildren: '../p6/p6.module#P6PageModule'
                    },
                    {
                        path: '',
                        loadChildren: '../measure/measure.module#MeasurePageModule'
                    }
                ]
            },
            {
                path: 'leaks',
                children: [
                    {
                        path: '',
                        loadChildren: '../leaks/leaks.module#LeaksPageModule'
                    }
                ]
            },
            {
                path: 'terms',
                children: [
                    {
                        path: '',
                        loadChildren: '../terms/terms.module#TermsPageModule'
                    }
                ]
            },
            {
                path: 'contact',
                children: [
                    {
                        path: '',
                        loadChildren: '../contact/contact.module#ContactPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/intro',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/intro',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
