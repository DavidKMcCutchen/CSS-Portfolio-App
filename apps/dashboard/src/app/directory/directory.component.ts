import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { PortfolioFacade } from '@css-portfolio/core-state';

@Component({
  selector: 'css-portfolio-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private portfolioFacade: PortfolioFacade
  ) {};

  ngOnInit() {
    this.portfolioFacade.loadPortfolios();
      
  }


  };
  
  
