<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'author' => $this->author,
            'description' => $this->description,
            'category' => $this->category,
            'image_path' => $this->image_path,
            'pdf_path' => $this->pdf_path,
            'language' => $this->language,
            'number_of_pages' => $this->number_of_pages,
        ];
    }
}
