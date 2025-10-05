<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    protected $fillable = ['user_id', 'mal_id', "img", 'title', 'type', 'episodes', "genres", "status", "year", "rating", "synopsis", "score"];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
