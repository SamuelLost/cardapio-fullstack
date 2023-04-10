package com.estudo.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estudo.cardapio.entities.Food;

public interface FoodRepository extends JpaRepository<Food, Long>{
    //<Food, Long> -> Food é a entidade e Long é o tipo da chave primária
}
