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

        $paginated = collect($data)->forPage(10, 10);

        return Inertia::render('Contents_with_min_info', ['dataList' => $data, 'status' => 'Recomendations like ' . $title]);
    }
}
