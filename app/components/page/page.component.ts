import { Component, OnInit, OnDestroy } from '@angular/core';
import myGlobals = require('../../globals'); 

import { Router, ActivatedRoute }              from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';
import { Subscription }          from 'rxjs/Subscription';

@Component({
  templateUrl: 'themes/' + myGlobals.themeName + '/page.tpl.html',
})

export class PageComponent implements OnInit, OnDestroy{

	private sub: Subscription;
	public pageHeading = "PAGE_NOT_FOUND_TITLE";
	public pageContent = "PAGE_NOT_FOUND_MSG";

	constructor(
	 	private route: ActivatedRoute,
    	private router: Router,
    	private translate: TranslateService
    ){}

 	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
	       let page = params['page']; 
	       if(myGlobals.allowedPages.indexOf(page)>=0)
	       {
	       		this.pageHeading = page + '.Heading';
	       		this.pageContent = page + '.Content';
        	}

	    });
	}
	ngOnDestroy() {
    	this.sub.unsubscribe();
  	}	
}