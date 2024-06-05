<?php

namespace App\Http\Controllers;
use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function addProduct(Request $req){
        $product = new Product();
        $product->name=$req->input("name");
        $product->price=$req->input("price");
        $product->description=$req->input("description");
        $product->file_path=$req->input("file");
        $product->save();
        return $product;

}
public function productList(){
    $product=Product::all();
    return $product;
}

public function deleteProduct($id){
    $user=Product::where('id',$id)->delete();
    if($user){
        return ['user'=>'product has been deleted'];
    }else{
        return ['user'=>'Erorr'];
    }
    return "deleted";
}
public function getProduct($id){

    return Product::find($id);
}
public function updateProduct($id ,request $req){
    $product =Product::find($id);
    $product->name=$req->input("name");
    $product->price=$req->input("price");
    $product->description=$req->input("description");
    $product->file_path=$req->input("file");
    $product->save();
    return $product;
}
public function searchProduct($key){
return Product::where("name","LIKE","%$key%")->get();
}

}
