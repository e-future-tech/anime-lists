<?php

namespace App\Models;

use Illuminate\Support\Facades\Http;
use Illuminate\Database\Eloquent\Model;

class jikanModel extends Model
{

    public static function getByName($keyword)
    {

        $query = 'https://api.jikan.moe/v4/anime?q=' . $keyword;
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

        return $http;
    }

    public static function getSeasons()
    {
        $query = 'https://api.jikan.moe/v4/seasons';
        $http = Http::get($query)->json();

        return $http;
    }

    public static function getSeasonContent($year, $season)
    {
        $query = 'https://api.jikan.moe/v4/seasons/' . $year . '/' . $season;
        $http = Http::get($query)->json();

        return $http;
    }

    public static function getTopAnime()
    {
        $query = 'https://api.jikan.moe/v4/top/anime';

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
