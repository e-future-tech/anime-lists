<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\jikanModel;
use Auth;
use Exception;
use Illuminate\Support\Facades\Request;

use function Laravel\Prompts\error;

class ContentController extends Controller
{

    protected $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    public function index($keywords = "")
    {

        $data = jikanModel::getByName($keywords);

        $filter_data = $data["data"];

        // jika user ada
        if ($this->user != null) {
            $favorites_id = $this->user->favorites()->pluck("mal_id")->toArray();

            $filter_data = collect($data["data"])->map(function ($row) use ($favorites_id) {

                $row["favorited"] = in_array($row["mal_id"], $favorites_id);

                return $row;
            });
        }

        return Inertia::render("Search", ['dataList' => $filter_data]);
    }

    public function seasons()
    {

        $season = jikanModel::getSeasons();

        return Inertia::render("Seasons", ['seasons' => $season["data"]]);
    }

    public function season_Content($year, $season)
    {
        $data = jikanModel::getSeasonContent($year, $season);

        $filter_data = $data["data"];

        // jika user ada
        if ($this->user != null) {
            $favorites_id = $this->user->favorites()->pluck("mal_id")->toArray();

            $filter_data = collect($data["data"])->map(function ($row) use ($favorites_id) {

                $row["favorited"] = in_array($row["mal_id"], $favorites_id);

                return $row;
            });
        }

        return Inertia::render("Status_Content", ['dataList' => $filter_data, 'status' => $season .  " " . $year]);
    }

    public function Top_Anime()
    {

        $data = jikanModel::getTopAnime();

        $filter_data = $data["data"];

        // jika user ada
        if ($this->user != null) {
            $favorites_id = $this->user->favorites()->pluck("mal_id")->toArray();

            $filter_data = collect($data["data"])->map(function ($row) use ($favorites_id) {

                $row["favorited"] = in_array($row["mal_id"], $favorites_id);

                return $row;
            });
        }

        return Inertia::render("TopAnime", ['dataList' => $filter_data]);
    }

    public function Top_Anime_airing()
    {
        $data = jikanModel::getTopAnimeByFilter("airing");

        $data_5 = array_slice($data["data"], 0, 7);

        return Inertia::render("Home", ['dataList' => $data_5]);
    }
}
