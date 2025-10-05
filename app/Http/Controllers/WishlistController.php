<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $wishlists = Wishlist::where('user_id', $user->id)->paginate(24);

        $arr = $wishlists->map(function ($row) {
            $row["wishlist"] = true;
            return $row;
        })->toArray();

        return Inertia::render('Contents_with_min_info', ['dataList' => $arr, 'status' => 'wishlists']);
    }


    public function store(Request $request)
    {
        // panggil user
        $user = Auth::user();

        // masukkan row data
        $row = $request->all();

        $user->Wishlists()->firstOrCreate($row);

        return back();
    }

    public function destroy(Request $request)
    {

        $validated = $request->validate([
            'mal_id' => 'required'
        ]);

        Wishlist::where('user_id', Auth::id())->where('mal_id', $validated["mal_id"])->delete();

        return back();
    }
}
