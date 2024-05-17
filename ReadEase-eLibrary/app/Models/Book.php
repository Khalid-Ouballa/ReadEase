<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'author',
        'description',
        'category',
        'image_path',
        'pdf_path',
        'language',
        'number_of_pages'
    ];

    public function booklists()
    {
        return $this->belongsToMany(User::class, 'booklists')
                    ->withPivot('status', 'progress')
                    ->withTimestamps();
    }
}
