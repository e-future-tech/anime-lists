<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\jikanModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DetailController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    public function index($id)
    {

        $data = jikanModel::getById($id);

        if ($this->user != null) {
            $favorites_id = $this->user->favorites()->pluck("mal_id")->toArray();
            $wishlist_id = $this->user->Wishlists()->pluck("mal_id")->toArray();

            $data["favorited"] = in_array($data["mal_id"], $favorites_id);
            $data["wishlist"] = in_array($data["mal_id"], $wishlist_id);
        }

        return Inertia::render('Detail', ['row' => $data, 'title' => "Detail"]);
    }
}
