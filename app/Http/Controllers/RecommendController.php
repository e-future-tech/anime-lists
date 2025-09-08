<?php

namespace App\Http\Controllers;

use App\Models\jikanModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecommendController extends Controller
{

    public static function index($id, $title)
    {
        $data = jikanModel::getByRecommendations($id);

        return Inertia::render('Recommendations', ['dataList' => $data['data'], 'title' => $title]);
    }
}
