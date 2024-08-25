import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit{


  allProducts:any=[]


  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.api.allProductApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allProducts=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
}
