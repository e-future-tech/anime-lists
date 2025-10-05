<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\jikanModel;
use Auth;


class ContentController extends Controller
{

    protected $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    public function contents_by_user($data)
    {

        $favorites_id = $this->user->favorites()->pluck("mal_id")->toArray();
        $wishlists_Id = $this->user->Wishlists()->pluck("mal_id")->toArray();

        $filter_data = collect($data)->map(function ($row) use ($favorites_id, $wishlists_Id) {

            $row["favorited"] = in_array($row["mal_id"], $favorites_id);
            $row["wishlist"] = in_array($row["mal_id"], $wishlists_Id);
            return $row;
        })->toArray();

        return $filter_data;
    }

    public function search_by_name($keywords, $page = 1)
    {
        $data = jikanModel::getByName($keywords, $page);

        $contents = $data["data"];

        // jika user ada
        if ($this->user != null) {
            $contents = $this->contents_by_user($data["data"]);
        }

        return Inertia::render("Contents_page", ['dataList' => $contents, 'status' => "Search", 'statusPage' => 'pageJikan', 'pages' => $data["pagination"]]);
    }

    public function seasons()
    {

        $season = jikanModel::getSeasons();

        return Inertia::render("Seasons", ['seasons' => $season["data"], 'title' => 'Seasons']);
    }

    public function season_Content($year, $season, $page = 1)
    {
        $data = jikanModel::getSeasonContent($year, $season, $page);

        $contents = $data["data"];

        // jika user ada
        if ($this->user != null) {
            $contents = $this->contents_by_user($data["data"]);
        }

        return Inertia::render("Contents_page", ['dataList' => $contents, 'status' => $season .  " " . $year, 'statusPage' => 'pageJikan', 'pages' => $data["pagination"], 'title' => 'Seasonal Anime']);
    }

    public function Top_Anime($page)
    {
        $data = jikanModel::getTopAnime($page);

        $contents = $data["data"];

        // jika user ada
        if ($this->user != null) {
            $contents = $this->contents_by_user($data["data"]);
        }

        return Inertia::render("TopAnime", ['dataList' => $contents, 'status' => 'TOP ANIME', 'statusPage' => 'pageJikan', 'pages' => $data["pagination"], 'title' => 'Top Anime']);
    }

    public function Top_Anime_upcoming()
    {
        $data = jikanModel::getTopAnimeByFilter("upcoming");

        $data_5 = array_slice($data["data"], 0, 14);

        return Inertia::render("Home", ['dataList' => $data_5]);
    }
}
