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
                        path: '',
                        loadChildren: '../calculate/calculate.module#CalculatePageModule'
                    }
                ]
            },
            {
                path: 'measure',
                children: [
                    {
                        path: '',
                        loadChildren: '../measure/measure.module#MeasurePageModule'
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
