<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;



class UserController extends Controller
{
    public function register(Request $request){
        $user = new User;
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->password=Hash::make($request->input('password'));
        $user->save();
        return "done";
    }
    public function send(){
        return "hi";
    }

    public function login(request $req){
        $user = User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password)){

           return response ([ "Error"=>["email or password incorrect"]

    ]);
}
        return $user;
    }

}
