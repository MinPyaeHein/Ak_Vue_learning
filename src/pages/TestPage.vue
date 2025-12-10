<template>
  <ChildCompoents
    :user="user"
    :age="age"
    :rows="products"
    :idKey="'id'"
    :columns="[
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Product Name' },
    { key: 'category', label: 'Product Category' },
    { key: 'price', label: 'Price' },
    { key: 'description', label: 'description' }
  ]"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildCompoents from '@/components/ChildCompoents.vue';
  type Product = {
  id: number
  name: string
  category: string
  price: number
  description: string
  imageUrl: string
  label?: 'Vegan' | 'Hot' | 'New' | string
  rating: number
  ratingCount: number
}
const user = ref('Minn')
const age = ref(25)
const products = ref<Product[]>([
  {
    id: 1,
    name: 'Chevrefrit Bowl',
    category: 'Bowls',
    price: 14,
    description:
      'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.',
    imageUrl:
      'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
    label: 'Vegan',
    rating: 5,
    ratingCount: 4
  },
  {
    id: 2,
    name: 'Saumon Gravlax',
    category: 'Sushi & Rolls',
    price: 9,
    description:
      'Salmon, avocado, cucumber, sushi rice, house special sauces.',
    imageUrl:
      'https://images.pexels.com/photos/3296273/pexels-photo-3296273.jpeg',
    label: 'Vegan',
    rating: 4,
    ratingCount: 1
  },
  {
    id: 3,
    name: 'Gourmet Burger',
    category: 'Burgers',
    price: 4,
    description:
      'Beef patty, cheddar, lettuce, tomato, brioche bun, cafe sauce.',
    imageUrl:
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    label: 'Hot',
    rating: 4,
    ratingCount: 4
  },
  {
    id: 4,
    name: 'Iced Caramel Latte',
    category: 'Coffee',
    price: 69,
    description: 'Espresso, caramel, cold milk, ice cubes.',
    imageUrl:
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
    label: 'New',
    rating: 5,
    ratingCount: 10
  },
  {
    id: 5,
    name: 'Matcha Latte',
    category: 'Tea',
    price: 5,
    description: 'Creamy matcha latte with soft milk foam.',
    imageUrl:
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
    label: 'Vegan',
    rating: 5,
    ratingCount: 7
  },
  {
    id: 6,
    name: 'Chocolate Cake',
    category: 'Desserts',
    price: 7,
    description: 'Rich dark chocolate layered cake with ganache.',
    imageUrl:
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    rating: 4,
    ratingCount: 12
  }
])
</script>
