<?php

namespace App\Models;

use Illuminate\Support\Facades\Http;
use Illuminate\Database\Eloquent\Model;

class jikanModel extends Model
{

    public static function getByName($keyword, $page)
    {
        $query = 'https://api.jikan.moe/v4/anime?q=' . $keyword . '&page=' . $page;

        $http = Http::get($query)->json();

        return $http;
    }

    public static function getById($id)
    {
        $query = 'https://api.jikan.moe/v4/anime/' . $id . '/full';
        $http = Http::get($query)->json();

        return $http["data"];
    }

    public static function getByRecommendations($id)
    {
        $query = 'https://api.jikan.moe/v4/anime/' . $id . '/recommendations';
        $http = Http::get($query)->json();

        $filter_data = [];

        foreach ($http["data"] as $row) {
            $row["entry"]["img"] = $row["entry"]["images"]["webp"]["image_url"];
            unset($row["entry"]["images"]);
            $filter_data[] = $row["entry"];
        }

        return $filter_data;
    }

    public static function getSeasons()
    {
        $query = 'https://api.jikan.moe/v4/seasons';
        $http = Http::get($query)->json();

        return $http;
    }

    public static function getSeasonContent($year, $season, $page = 1)
    {
        $query = 'https://api.jikan.moe/v4/seasons/' . $year . '/' . $season . '?page=' . $page;
        $http = Http::get($query)->json();

        return $http;
    }

    public static function getTopAnime($page)
    {
        $query = 'https://api.jikan.moe/v4/top/anime?page=' . $page;

        $http = Http::get($query)->json();

        return $http;
    }

    public static function getTopAnimeByFilter($filter)
    {
        $query = 'https://api.jikan.moe/v4/top/anime?filter=' . $filter;

        $http = Http::get($query)->json();

        return $http;
    }
}
