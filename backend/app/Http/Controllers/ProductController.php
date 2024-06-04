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
}
