package com.estudo.cardapio.dto;

import com.estudo.cardapio.entities.Food;

public record FoodResponseDTO(Long id, String title, String image, Double price) {
     public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
     } 
}
