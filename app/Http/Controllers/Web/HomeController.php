<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home(Request $request){
        if ($request->ajax()){
            return view('pages.home');
        }

        return view('components.app');
    }
}
