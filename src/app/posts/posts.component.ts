import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { ProductService } from '../product.service';
import { PriorityService } from '../priority.service';
import { TotalService } from '../total.service';
import { FilterService } from '../filter.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  filtersPro: any = [];
  filtersPri: any = [];
  filtersFil: any = [];
  priorities: any = [];
  components: any = [];
  filters: any = [];
  pri0: string;
  pri1: string;
  pri2: string;
  totalpri0: string;
  totalpri1: string;
  totalpri2: string;
  comp0: string;
  comp1: string;
  comp2: string;
  comp3: string;
  comp4: string;
  comp5: string;
  totalcomp0: string;
  totalcomp1: string;
  totalcomp2: string;
  totalcomp3: string;
  totalcomp4: string;
  totalcomp5: string;
  fil0: string;
  fil1: string;
  totalfil0: string;
  totalfil1: string;

  showLoadingComponent: boolean = true;
  showLoadingPriority: boolean = true;
  showLoadingFilter: boolean = true;
  showFilter: boolean = false;
  showComponent: boolean = false;
  showPriority: boolean = false;


  constructor(private postService: PostsService, private productService: ProductService,
    private priorityService: PriorityService, private totalService: TotalService,
    private filterService: FilterService) {
    setInterval(() => this.reloadPage(), 180000);
  }

  ngOnInit() {
    // this.postService.getAllPosts().subscribe(posts => {
    //   this.posts = posts;
    // });
    this.getProduct();
    this.getPriority();
    this.getFilters();
  }

  getProduct(){
    this.productService.getAllProducts().subscribe(products => {
      this.filtersPro = Object.keys(products);
      for(var i = 0; i < this.filtersPro.length; i++){
        this.totalService.getTotals(this.filtersPro[i], products[this.filtersPro[i]], i).subscribe(overAll => {
          this.components.push(overAll);
          if(this.filtersPro.length == this.components.length){
            for(var x = 0; x < this.components.length; x++){
              if(x == 0){
                this.comp0 = this.components[0].name;
                this.totalcomp0 = this.components[0].amount;
              }
              if(x == 1){
                this.comp1 = this.components[1].name;
                this.totalcomp1 = this.components[1].amount;
              }
              if(x == 2){
                this.comp2 = this.components[2].name;
                this.totalcomp2 = this.components[2].amount;
              }
              if(x == 3){
                this.comp3 = this.components[3].name;
                this.totalcomp3 = this.components[3].amount;
              }
              if(x == 4){
                this.comp4 = this.components[4].name;
                this.totalcomp4 = this.components[4].amount;
              }
              if(x == 5){
                this.comp5 = this.components[5].name;
                this.totalcomp5 = this.components[5].amount;
              }
            }
            this.showLoadingComponent = false;
            this.showComponent = true;
          }
        });
        //console.log(this.filtersPro[i] + ' : ' + products[this.filtersPro[i]]);
      }
    });
  }

  getPriority(){
    this.priorityService.getAllPriorities().subscribe(products => {
      this.filtersPri = Object.keys(products);
      for(var i = 0; i < this.filtersPri.length; i++){
        this.totalService.getTotals(this.filtersPri[i], products[this.filtersPri[i]], i).subscribe(overAll => {
          this.priorities.push(overAll);
          if(this.filtersPri.length == this.priorities.length){
            for(var x = 0; x < this.priorities.length; x++){
              if(x == 0){
                this.pri0 = this.priorities[0].name;
                this.totalpri0 = this.priorities[0].amount;
              }
              if(x == 1){
                this.pri1 = this.priorities[1].name;
                this.totalpri1 = this.priorities[1].amount;
              }
              if(x == 2){
                this.pri2 = this.priorities[2].name;
                this.totalpri2 = this.priorities[2].amount;
              }
            }
            this.showLoadingPriority = false;
            this.showPriority = true;
            for(var y = 0; y < this.priorities.length; y++ ){
              for(var t = 0; t < this.priorities[y].issues.length; t++){
                console.log(this.priorities[y].name + " assignee: " + this.priorities[y].issues[t].fields.assignee.name);
                console.log(this.priorities[y].name + " reporter: " + this.priorities[y].issues[t].fields.reporter.name);
              }
            }
          }
          //console.log(this.priorities);
        });
        //console.log(this.filtersPri[i] + ' : ' + products[this.filtersPri[i]]);
      }
    });
  }

  getFilters(){
    this.filterService.getAllFilters().subscribe(products => {
      this.filtersFil = Object.keys(products);
      for(var i = 0; i < this.filtersFil.length; i++){
        this.totalService.getTotals(this.filtersFil[i], products[this.filtersFil[i]], i).subscribe(overAll => {
          this.filters.push(overAll);
          if(this.filtersFil.length == this.filters.length){
            for(var x = 0; x < this.filters.length; x++){
              if(x == 0){
                this.fil0 = this.filters[0].name;
                this.totalfil0 = this.filters[0].amount;
              }
              if(x == 1){
                this.fil1 = this.filters[1].name;
                this.totalfil1 = this.filters[1].amount;
              }
            }
            this.showLoadingFilter = false;
            this.showFilter = true;
          }
          //console.log(this.priorities);
        });
        //console.log(this.filtersPri[i] + ' : ' + products[this.filtersPri[i]]);
      }
    });
  }

  reloadPage() {
       location.reload();
   }

}
