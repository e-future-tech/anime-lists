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

        $favorites = favorite::where('user_id', $user->id)->paginate(24);
        $wishlists_Id = $user->Wishlists()->pluck("mal_id")->toArray();

        $filter_data = $favorites->map(function ($row) use ($wishlists_Id) {
            $row["genres"] = json_decode($row["genres"]);
            $row["favorited"] = true;
            $row["wishlist"] = in_array($row["mal_id"], $wishlists_Id);

            return $row;
        })->toArray();

        return Inertia::render("Contents_page", ['title' => 'Favorites', 'status' => "Favorites", 'dataList' => $filter_data,  'statusPage' => 'pageInternal', 'pages' => $favorites]);
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
