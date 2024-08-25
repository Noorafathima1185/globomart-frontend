import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  product:any={}

  constructor(private api:ApiService, private aRoute:ActivatedRoute){}

  ngOnInit(): void {
    // activated routes inorder to acccess datas from the url
    this.aRoute.params.subscribe((res:any)=>{
      const {id} = res
      this.getProduct(id)
      
    })
    // this.getProduct()
  }

  getProduct(id:any){
    this.api.getAproductApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.product=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
