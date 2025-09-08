<?php


namespace App\Http\Controllers;


use App\Models\favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FavoriteController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $favorites = favorite::where('user_id', $user->id)->paginate(1);

        $favorites->map(function ($row) {
            $row["genres"] = json_decode($row["genres"]);
            $row["favorited"] = true;
            return $row;
        });

        return Inertia::render('Status_Content', ['dataList' => $favorites, 'status' => 'Favorites']);
    }


    public function store(Request $request)
    {

        $user = Auth::user();

        $filter = $request->all();

        $filter["genres"] = json_encode($filter["genres"]);

        $user->favorites()->firstOrCreate($filter);

        return back();
    }

    public function destroy(Request $request)
    {

        $validated = $request->validate([
            'mal_id' => 'required'
        ]);

        Favorite::where('user_id', Auth::id())->where('mal_id', $validated["mal_id"])->delete();

        return back();
    }
}
